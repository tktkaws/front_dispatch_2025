import * as cheerio from 'cheerio';

export const renderToc = (body) => {
  const $ = cheerio.load(body);
  const headings = $('h1, h2, h3').toArray();
  const toc = headings.map((data) => ({
    text: data.children[0].data,
    id: data.attribs.id,
    level: Number(data.name.charAt(1)) // h2 -> 2, h3 -> 3
  }));

  return toc;
};