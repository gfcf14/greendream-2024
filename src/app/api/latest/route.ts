import { NextResponse } from 'next/server';
import * as cheerio from 'cheerio';
import openDb from '@/utils/db';
import { LatestAsset } from '@/utils/types';

export async function GET() {
  try {
    const db = openDb();
    const program = db
      .prepare('SELECT id, name, icon FROM programs ORDER BY id DESC LIMIT 1')
      .get();
    const game = db
      .prepare('SELECT id, name, icon FROM games ORDER BY id DESC LIMIT 1')
      .get();

    const username = 'carloscuba014';
    const profileUrl = `https://medium.com/@${username}`;
    const rssUrl = `https://medium.com/feed/@${username}`;
    const response = await fetch(profileUrl);

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
        const lastArticle = $rss('item').first();

        const contentEncoded = lastArticle
          .find('content\\:encoded')
          .first()
          .text();
        const $desc = cheerio.load(contentEncoded);

        const article = {
          name: lastArticle.find('title').text(),
          icon: $desc('img').first().attr('src') || '',
          link: lastArticle.find('guid').text(),
        };

        const latestAssets: LatestAsset[] = [
          {
            ...(program as LatestAsset),
            type: 'program',
          },
          {
            ...(game as LatestAsset),
            type: 'game',
          },
          {
            ...article,
            type: 'article',
          },
        ];

        return NextResponse.json(latestAssets);
      }

      // if it still fails return the error
      return NextResponse.json({
        error: `Failed to fetch Medium profile: ${response.status}`,
      });
    }

    const html = await response.text();
    const $ = cheerio.load(html);
    const lastArticle = $('article').first();
    const article = {
      name: lastArticle.find('h2').text(),
      icon: lastArticle.find('img').last().attr('src') || '',
      link: lastArticle.find('div[role="link"]').data('href') as string,
    };

    const latestAssets: LatestAsset[] = [
      {
        ...(program as LatestAsset),
        type: 'program',
      },
      {
        ...(game as LatestAsset),
        type: 'game',
      },
      {
        ...article,
        type: 'article',
      },
    ];

    return NextResponse.json(latestAssets);
  } catch (error) {
    console.error('Error scraping Medium:', error);
    return NextResponse.json({ error: 'Failed to scrape Medium profile' });
  }
}
