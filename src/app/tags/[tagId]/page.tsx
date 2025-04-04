import { getBlogsList, getTagsWithCount, getAllTags } from "@/app/_libs/microcms";
import CardList from "@/app/_component/CardList";
import { BLOG_LIST_LIMIT } from "@/app/_constants";
// import TitleContainer from "@/app/component/TitleContainer";
// import TagList from "@/app/component/TagList";
import TagListHorizontal from "@/app/_component/TagListVertical";
import TitleContainerHorizontal from "@/app/_component/TitleContainerVertical";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Props = {
  params: Promise<{
    tagId: string;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const tagId = resolvedParams.tagId;
  const tags = await getAllTags();
  const tag = tags.contents.find(t => t.id === tagId);

  if (!tag) {
    return {
      title: "タグが見つかりません | Front Dispatch",
      description: "指定されたタグが見つかりませんでした。",
    };
  }

  return {
    title: `${tag.title} の記事一覧 | Front Dispatch`,
    description: `${tag.title} に関する記事の一覧です。`,
    openGraph: {
      title: `${tag.title} の記事一覧`,
      description: `${tag.title} に関する記事の一覧です。`,
    },
  };
}

export default async function TagPage({ params }: Props) {
  const resolvedParams = await params;
  const tagId = resolvedParams.tagId;

  const data = await getBlogsList({
    limit: BLOG_LIST_LIMIT,
    offset: 0,
    filters: `tags[contains]${tagId}`,
  });

  const tags = await getTagsWithCount();

  // タグに紐付くコンテンツがない場合は404
  if (data.contents.length === 0) {
    notFound();
  }

  return (
    <main 
      id="main-content" 
      tabIndex={-1} 
      className="pt-12 pb-12 grid grid-cols-[4%_92%_4%] xl:grid-cols-[1fr_1200px_1fr] bg-[#F5F4F0] dark:bg-[#202024]"
    >
      <div className="col-[2]">
        <div className="grid grid-cols-1 lg:grid-cols-[46%_46%] gap-x-[8%] p-[4%] md:p-8">
        <TitleContainerHorizontal />
        <TagListHorizontal tags={tags.contents} />
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

export async function generateStaticParams() {
  const tags = await getAllTags();
  return tags.contents.map((tag) => ({
    tagId: tag.id,
  }));
}