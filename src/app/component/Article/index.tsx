import type { Blog } from "@/app/_libs/microcms";
import "github-markdown-css";
import { renderToc } from "@/app/_libs/render-toc";
import TableOfContents from "@/app/component/TableOfContents";

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
          className="markdown-body"
          dangerouslySetInnerHTML={{
            __html: data.body,
          }}
        />
      </div>
    </article>
  );
}
