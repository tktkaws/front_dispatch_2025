"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Tag {
  id: string;
  title: string;
  totalCount: number;
}

interface TagListProps {
  tags: Tag[];
}

export default function TagList({ tags }: TagListProps) {
  const currentPath = usePathname();
  
  // タグを記事数で降順ソート
  const sortedTags = [...tags].sort((a, b) => b.totalCount - a.totalCount);

  return (
    <ul className="grid grid-cols-1 justify-start items-start text-lg pt-4 w-full border-[#CCCCCC]">
      <li className="min-h-4 h-full w-full border-[#CCCCCC] border-b border-dotted">
        <Link
          href="/"
          className={`pt-2 pb-2 lg:pt-0 lg:pb-0 w-full h-full px-2 grid grid-flow-col grid-cols-[auto_auto_1fr] justify-start items-center ${
            currentPath === "/" 
              ? "font-extrabold" 
              : ""
          }`}
        >
          ALL
          <span className="row-start-1 col-start-3 justify-self-end text-base text-gray-500 dark:text-gray-400">
            ({sortedTags.reduce((acc, tag) => acc + tag.totalCount, 0)})
          </span>
        </Link>
      </li>
      {sortedTags.filter(tag => tag.totalCount > 0).map((tag) => (
        <li key={tag.id} className="h-full border-[#CCCCCC] border-b border-dotted w-full">
          <Link
            href={`/tags/${tag.id}`}
            className={`pt-2 pb-2 lg:pt-0 lg:pb-0 w-full h-full px-2 grid grid-flow-col grid-cols-[auto_auto_1fr] justify-start items-center ${
              currentPath === `/tags/${tag.id}` 
                ? "font-extrabold dark:text-white" 
                : "text-gray-600 hover:font-extrabold hover:text-black dark:text-gray-300 dark:hover:text-white"
            }`}
          >
            {tag.title} 
            <span className="row-start-1 col-start-3 justify-self-end text-base text-gray-500 dark:text-gray-400">
              ({tag.totalCount})
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
} 