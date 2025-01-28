"use client";
import type { Blog } from "@/app/_libs/microcms";
import Date from "@/app/component/Date";
import Link from "next/link";
import Image from 'next/image';
import { usePathname } from 'next/navigation';

type Props = {
  data: Blog[];
  totalCount?: number;
  currentPage?: number;
  perPage?: number;
};

export default function CardList({ data, totalCount, currentPage, perPage }: Props) {
  const pathname = usePathname();
  const showPagination = totalCount && currentPage && perPage;
  const maxPage = showPagination ? Math.ceil(totalCount / perPage) : 0;

  // パスからtagIdを抽出
  const tagMatch = pathname?.match(/\/tags\/([^\/]+)/);
  const tagId = tagMatch ? tagMatch[1] : null;

  // ページネーションのURLを生成
  const getPageUrl = (pageNum: number) => {
    if (tagId) {
      return `/tags/${tagId}/page/${pageNum}`;
    }
    return `/page/${pageNum}`;
  };

  return (
    <div className="mt-8 w-full">
      <ul className="grid w-full grid-cols-1 lg:grid-cols-2 justify-center gap-8">
        {data.map((blog) => (
          <li key={blog.id}>
            <Link 
              href={`/blog/${blog.id}`} 
              className="grid h-auto w-full grid-cols-[auto_auto_1fr] grid-rows-[100px_auto] items-center gap-x-[4%] md:gap-x-8 rounded-md border border-[#CCCCCC] p-[4%] md:p-4  text-[1.0625rem] hover:outline hover:outline-1 hover:outline-current"
            >
              <p className="col-span-full row-start-1 self-start justify-self-start font-bold">
                {blog.title}
              </p>
              <p className="row-start-2 col-start-1">
                <Date date={blog.publishedAt ?? blog.createdAt} />
              </p>
              <div className="row-start-2 col-start-2 flex gap-x-[4%] md:gap-x-4 justify-end md:justify-start">
                {blog.tags.slice(0, 2).map((tag, idx) => (
                  <p 
                    key={idx} 
                    className="whitespace-nowrap rounded-[0.95em] border border-[#CCCCCC] px-3 md:px-4 py-[0.2em] text-[0.8rem] text-[#555555] dark:text-white"
                  >
                    {tag.title}
                  </p>
                ))}
              </div>
              <Image
                src="/Arrow1.svg"
                alt=""
                width={13}
                height={13}
                className="row-start-2 col-start-3 justify-self-end"
              />
            </Link>
          </li>
        ))}
      </ul>

      {showPagination && (
        <div className="mt-12 flex justify-center gap-4">
          {currentPage > 1 && (
            <Link
              href={getPageUrl(currentPage - 1)}
              className="px-4 py-2 border rounded hover:bg-gray-100 dark:hover:bg-white dark:hover:text-black"
            >
              前のページ
            </Link>
          )}
          <span className="px-4 py-2">
            {currentPage} / {maxPage}
          </span>
          {currentPage < maxPage && (
            <Link
              href={getPageUrl(currentPage + 1)}
              className="px-4 py-2 border rounded hover:bg-gray-100 dark:hover:bg-white dark:hover:text-black"
            >
              次のページ
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
