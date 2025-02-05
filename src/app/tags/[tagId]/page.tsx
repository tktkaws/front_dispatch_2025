import { getBlogsList, getAllTags } from "@/app/_libs/microcms";
import CardList from "@/app/component/CardList";
import { BLOG_LIST_LIMIT } from "@/app/_constants";
import TitleContainer from "@/app/component/TitleContainer";
import TagList from "@/app/component/TagList";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    tagId: string;
  }>;
};

export default async function TagPage({ params }: Props) {
  const resolvedParams = await params;
  const tagId = resolvedParams.tagId;

  const data = await getBlogsList({
    limit: BLOG_LIST_LIMIT,
    offset: 0,
    filters: `tags[contains]${tagId}`,
  });

  const tags = await getAllTags();

  // タグに紐付くコンテンツがない場合は404
  if (data.contents.length === 0) {
    notFound();
  }

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
          currentPage={1}
          perPage={BLOG_LIST_LIMIT}
        />
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