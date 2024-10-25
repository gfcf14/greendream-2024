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

    const profileUrl = 'https://medium.com/@carloscuba014';
    const response = await fetch(profileUrl);

    if (!response.ok) {
      return NextResponse.json({
        error: `Failed to fetch Medium profile: ${response.status}`,
      });
    }

    const html = await response.text();
    const $ = cheerio.load(html);
    const lastArticle = $('article').last();
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
