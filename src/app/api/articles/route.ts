import { NextResponse } from 'next/server';
import * as cheerio from 'cheerio';
import { Article } from '@/utils/types';

export async function GET() {
  try {
    const profileUrl = 'https://medium.com/@carloscuba014';
    const response = await fetch(profileUrl);

    if (!response.ok) {
      return NextResponse.json({
        error: `Failed to fetch Medium profile: ${response.status}`,
      });
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

    return NextResponse.json(articles);
  } catch (error) {
    console.error('Error scraping Medium:', error);
    return NextResponse.json({ error: 'Failed to scrape Medium profile' });
  }
}
