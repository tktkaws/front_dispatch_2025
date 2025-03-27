import { getBlogsList, getTagsWithCount } from "@/app/_libs/microcms";
import CardList from "@/app/_component/CardList";
import { BLOG_LIST_LIMIT } from "@/app/_constants";
// import TitleContainer from "@/app/component/TitleContainer";
// import TagList from "@/app/component/TagList";
import TagListHorizontal from "@/app/_component/TagListVertical";
import TitleContainerHorizontal from "@/app/_component/TitleContainerVertical";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    tagId: string;
    page: string;
  }>;
};

export default async function TagPaginatedPage({ params }: Props) {
  const resolvedParams = await params;
  const page = parseInt(resolvedParams.page, 10);
  const tagId = resolvedParams.tagId;

  // ページ番号が不正な場合は404
  if (isNaN(page) || page < 1) {
    notFound();
  }

  const data = await getBlogsList({
    limit: BLOG_LIST_LIMIT,
    offset: (page - 1) * BLOG_LIST_LIMIT,
    filters: `tags[contains]${tagId}`,
  });

  // データが存在しない場合は404
  if (data.contents.length === 0) {
    notFound();
  }

  const tags = await getTagsWithCount();

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
            currentPage={page}
            perPage={BLOG_LIST_LIMIT}
          />
        </div>
      </div>
    </main>
  );
} 