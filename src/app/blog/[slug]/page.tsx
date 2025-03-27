import { notFound } from "next/navigation";
import { getBlogDetail, getBlogsList } from "@/app/_libs/microcms";
import Article from "@/app/_component/Article";
import Date from "@/app/_component/Date";
import CardList from "@/app/_component/CardList";
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
      <main className="pt-12 grid grid-cols-[4%_92%_4%] xl:grid-cols-[1fr_1200px_1fr] bg-[#F5F4F0] dark:bg-[#202024]">
        <div className="w-full h-full col-span-full grid grid-cols-subgrid">
          <div className="px-8 col-[2] grid grid-rows-[80%_20%] grid-cols-[auto_1fr] place-items-center justify-start gap-x-8">
            <div className="w-full row-start-1 col-span-full grid place-items-center justify-start  py-8 md:py-12 lg:py-16">
              <p className="w-full font-extrabold lg:text-4xl lg:leading-normal md:text-3xl md:leading-normal text-xl leading-normal">
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
                    className="text-sm text-[#555555] dark:bg-black dark:text-white px-4 py-0.5 border border-[#CCCCCC] rounded-2xl hover:outline hover:outline-1 hover:outline-current hover:border-white"
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
      <aside className="pt-12 grid grid-cols-[4%_92%_4%] xl:grid-cols-[1fr_1200px_1fr] bg-[#F5F4F0] dark:bg-[#202024]">
        <div className="col-[2]">
          <div className="bg-white dark:bg-[#292D30] rounded-md p-[4%] md:p-4 lg:p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">最新記事</h2>
            <CardList data={listData.contents} />
          </div>
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
