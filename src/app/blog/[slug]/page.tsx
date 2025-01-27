import { notFound } from "next/navigation";
import { getBlogDetail, getBlogsList } from "@/app/_libs/microcms";
import Article from "@/app/component/Article";
import Date from "@/app/component/Date";
import CardList from "@/app/component/CardList";
import { TOP_NEWS_LIMIT } from "@/app/_constants";
import Link from "next/link";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function Page({ 
  params,
}: Props) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  
  if (!slug) {
    notFound();
  }

  const data = await getBlogDetail(slug).catch(notFound);
  const listData = await getBlogsList({
    limit: TOP_NEWS_LIMIT,
  });

  return (
    <>
      <main className="pt-12 grid grid-cols-[4%_92%_4%] xl:grid-cols-[1fr_1200px_1fr]">
        <div className="w-full h-full col-span-full border-b border-[#CCCCCC] grid grid-cols-subgrid">
          <div className="col-[2] grid grid-rows-[80%_20%] grid-cols-[auto_1fr] place-items-center justify-start gap-x-8">
            <div className="w-full row-start-1 col-span-full grid place-items-center justify-start py-20">
              <p className="w-full font-extrabold lg:text-5xl md:text-4xl text-3xl">
                {data.title}
              </p>
            </div>
            <p className="row-start-2 col-start-1 justify-self-start">
              <Date date={data.publishedAt ?? data.createdAt} />
            </p>
            <div className="row-start-2 col-start-2 justify-self-start grid grid-flow-col gap-x-4">
              {data.tags &&
                data.tags.map((tag, idx) => (
                  <Link
                    key={idx}
                    href={`/tags/${tag.id}`}
                    className="text-sm text-[#555555] px-4 py-0.5 border border-[#CCCCCC] rounded-2xl hover:outline hover:outline-1 hover:outline-current hover:border-white"
                  >
                    {tag.title}
                  </Link>
                ))}
            </div>
          </div>
        </div>
        <div className="col-[2]">
          <Article data={data} />
        </div>
      </main>
      <aside className="pt-12 grid grid-cols-[4%_92%_4%] xl:grid-cols-[1fr_1200px_1fr]">
        <div className="col-[2]">
          <h2 className="mt-24 text-2xl font-bold">最新記事</h2>
          <CardList data={listData.contents} />
        </div>
      </aside>
    </>
  );
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const posts = await getBlogsList({ limit: 100 });
  
  return posts.contents.map((post) => ({
    slug: post.id,
  }));
}
