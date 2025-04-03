import { load } from 'cheerio';

export function parseIframely(html: string) {
  const $ = load(html);
  const iframelyElements: { url: string }[] = [];

  $('.iframely-embed').each((_, elem) => {
    const anchor = $(elem).find('a');
    const url = anchor.attr('href');
    if (url) {
      iframelyElements.push({ url });
    }
  });

  return iframelyElements;
} 