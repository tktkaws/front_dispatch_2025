import { getBlogsList, getTagsWithCount } from "@/app/_libs/microcms";
import CardList from "@/app/_component/CardList";
import { BLOG_LIST_LIMIT } from "@/app/_constants";
import TagListVertical from "@/app/_component/TagListVertical";
import TitleContainerVertical from "@/app/_component/TitleContainerVertical";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Front Dispatch",
  description: "アクセシビリティ、モダンフロントエンド関係を中心とした技術ブログです。自身の知識を整理することが目的です。",
  openGraph: {
    title: "Front Dispatch",
    description: "アクセシビリティ、モダンフロントエンド関係を中心とした技術ブログです。自身の知識を整理することが目的です。",
  },
};

export default async function Home() {
  const data = await getBlogsList({
    limit: BLOG_LIST_LIMIT,
    offset: 0,
  });
  const tags = await getTagsWithCount();

  return (
    <main 
      id="main-content" 
      tabIndex={-1} 
      className="pt-12 pb-12 grid grid-cols-[4%_92%_4%] xl:grid-cols-[1fr_1200px_1fr] bg-[#F5F4F0] dark:bg-[#202024]"
    >
      <div className="col-[2]">
        <div className="grid grid-cols-1 lg:grid-cols-[46%_46%] gap-x-[8%] p-[2%] md:p-[2%]">
        <TitleContainerVertical />
        <TagListVertical tags={tags.contents} />
        </div>
        <div className="bg-white dark:bg-[#292D30] rounded-md p-[4%] md:p-4 lg:p-8 mt-8">
          <CardList 
            data={data.contents} 
            totalCount={data.totalCount}
            currentPage={1}
            perPage={BLOG_LIST_LIMIT}
          />
        </div>
      </div>
    </main>
  );
}