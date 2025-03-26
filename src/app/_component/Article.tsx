import type { Blog } from "@/app/_libs/microcms";
import "github-markdown-css";
import { renderToc } from "@/app/_libs/render-toc";
import TableOfContents from "@/app/_component/TableOfContents";

type Props = {
  data: Blog;
};

export default async function Article({ data }: Props) {
  const toc = renderToc(data.body);
  
  return (
    <article className="grid lg:grid-cols-[76%_20%] lg:gap-x-[4%] grid-cols-1">
      <div className="lg:col-start-2 row-start-1 col-start-1">
        <TableOfContents toc={toc} />
      </div>
      <div className="col-start-1 mt-12">
        <div
          className="p-4 lg:p-8 py-8 lg:py-16 rounded-md markdown-body [&_h1]:scroll-mt-16 [&_h2]:scroll-mt-16 [&_h3]:scroll-mt-16 dark:text-white dark:bg-[#292D30]"
          dangerouslySetInnerHTML={{
            __html: data.body,
          }}
        />
      </div>
    </article>
  );
}
