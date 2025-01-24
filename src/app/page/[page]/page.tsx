import { getBlogsList, getAllTags } from "@/app/_libs/microcms";
import CardList from "@/app/component/CardList";
import { BLOG_LIST_LIMIT } from "@/app/_constants";
import TitleContainer from "@/app/component/TitleContainer";
import TagList from "@/app/component/TagList";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    page: string;
  }>;
};

export default async function PaginatedPage({ params }: Props) {
  const resolvedParams = await params;
  const page = parseInt(resolvedParams.page, 10);

  // バリデーション
  if (isNaN(page) || page < 1) {
    notFound();
  }

  const data = await getBlogsList({
    limit: BLOG_LIST_LIMIT,
    offset: (page - 1) * BLOG_LIST_LIMIT,
  });

  // データ存在チェック
  if (data.contents.length === 0) {
    notFound();
  }

  const tags = await getAllTags();

  return (
    <main 
      id="main-content" 
      tabIndex={-1} 
      className="pt-12 grid grid-cols-[4%_92%_4%] xl:grid-cols-[1fr_1200px_1fr]"
    >
      <div className="col-[2]">
        <TitleContainer />
        <TagList tags={tags.contents} />
        <CardList 
          data={data.contents} 
          totalCount={data.totalCount}
          currentPage={page}
          perPage={BLOG_LIST_LIMIT}
        />
      </div>
    </main>
  );
} 