'use client';

import { useEffect, useState } from 'react';
import type { Blog } from "@/app/_libs/microcms";
import "github-markdown-css";
import { renderToc } from "@/app/_libs/render-toc";
import TableOfContents from "@/app/_component/TableOfContents";
import Iframely from '@/app/_components/Iframely';

type Props = {
  data: Blog;
};

export default function Article({ data }: Props) {
  const [mounted, setMounted] = useState(false);
  const toc = renderToc(data.body);

  // HTML文字列を分割してiframelyと通常のコンテンツを交互に配置
  const contentParts = data.body.split(/<div class="iframely-embed">.*?<\/div><\/div>/);
  const iframelyMatches = data.body.match(/<div class="iframely-embed">.*?href="(.*?)".*?<\/div><\/div>/g);
  const iframelyUrls = iframelyMatches?.map(match => {
    const urlMatch = match.match(/href="(.*?)"/);
    return urlMatch?.[1] || '';
  }) || [];

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <article className="grid lg:grid-cols-[76%_20%] lg:gap-x-[4%] grid-cols-1">
        <div className="lg:col-start-2 row-start-1 col-start-1">
          <TableOfContents toc={toc} />
        </div>
        <div className="col-start-1 mt-12">
          <div className="p-4 lg:p-8 py-8 lg:py-16 rounded-md markdown-body [&_h1]:scroll-mt-16 [&_h2]:scroll-mt-16 [&_h3]:scroll-mt-16 dark:text-white dark:bg-[#292D30]" />
        </div>
      </article>
    );
  }

  return (
    <article className="grid lg:grid-cols-[76%_20%] lg:gap-x-[4%] grid-cols-1">
      <div className="lg:col-start-2 row-start-1 col-start-1">
        <TableOfContents toc={toc} />
      </div>
      <div className="col-start-1 mt-12">
        <div className="p-4 lg:p-8 py-8 lg:py-16 rounded-md markdown-body [&_h1]:scroll-mt-16 [&_h2]:scroll-mt-16 [&_h3]:scroll-mt-16 dark:text-white dark:bg-[#292D30]">
          {contentParts.map((part, index) => (
            <div key={index}>
              <div dangerouslySetInnerHTML={{ __html: part }} />
              {iframelyUrls[index] && (
                <Iframely url={iframelyUrls[index]} />
              )}
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
