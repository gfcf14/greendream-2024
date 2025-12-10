import { NextResponse } from 'next/server';
import * as cheerio from 'cheerio';
import { Article } from '@/utils/types';
import { clamp } from '@/helpers/clamp';

export async function GET() {
  try {
    const username = 'carloscuba014';
    const profileUrl = `https://medium.com/@${username}`;
    const rssUrl = `https://medium.com/feed/@${username}`;
    const response = await fetch(profileUrl, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36',
        Accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
        Referer: 'https://medium.com/',
      },
    });

    if (!response.ok) {
      // If blocked, try the RSS feed as a fallback
      if (response.status === 403 || response.status === 429) {
        const rssResponse = await fetch(rssUrl, {
          headers: {
            'User-Agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36',
            Accept: 'application/rss+xml, application/xml, text/xml, */*;q=0.1',
            'Accept-Language': 'en-US,en;q=0.9',
            Referer: 'https://medium.com/',
          },
        });

        if (!rssResponse.ok) {
          return NextResponse.json(
            { error: `Failed to fetch Medium RSS: ${rssResponse.status}` },
            { status: rssResponse.status },
          );
        }

        const rssText = await rssResponse.text();
        const $rss = cheerio.load(rssText, { xmlMode: true });
        const articlesFromRss: Article[] = [];

        $rss('item').each((i, el) => {
          const title = $rss(el).find('title').text() || '';
          const link = $rss(el).find('guid').text();

          const contentEncoded =
            $rss(el).find('content\\:encoded').first().text() ||
            $rss(el).find('description').first().text() ||
            '';
          const $desc = cheerio.load(contentEncoded);

          const description = $desc('p').first().text() || '';
          const image =
            $desc('img').first().attr('src') ||
            $rss(el).find('enclosure').attr('url') ||
            $rss(el).find('media\\:content').attr('url') ||
            '';

          articlesFromRss.push({
            title,
            description: clamp(description, 300),
            image: `https://miro.medium.com/v2/${image.slice(image.lastIndexOf('/') + 1)}`,
            url: link,
          });
        });

        return NextResponse.json({ articles: articlesFromRss, status: 200 });
      }

      // Other non-ok responses: forward meaningful status
      return NextResponse.json(
        { error: `Failed to fetch Medium profile: ${response.status}` },
        { status: response.status },
      );
    }

    const html = await response.text();
    const $ = cheerio.load(html);
    const articles: Article[] = [];

    $('article').each((index, element) => {
      const description = $(element).find('h3').text();
      const image = $(element).find('img').last().attr('src') || '';
      const title = $(element).find('h2').text();
      const url = $(element).find('div[role="link"]').data('href') as string;

      articles.push({
        description,
        image,
        title,
        url,
      });
    });

    return NextResponse.json({ articles, status: 200 });
  } catch (error) {
    return NextResponse.json({
      error: `Failed to scrape Medium profile: ${error}`,
      status: 500,
    });
  }
}
