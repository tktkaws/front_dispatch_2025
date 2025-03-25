"use client";
import type { Blog } from "@/app/_libs/microcms";
import Date from "@/app/_component/Date";
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
    <div className="">
    {/* <div className="w-full bg-white dark:bg-[#292D30] rounded-md p-0 md:p-4 mt-8 mb-8"> */}
      <ul className="grid w-full grid-cols-1 justify-center">
        {data.map((blog) => (
          <li key={blog.id}>

            <Link 
              href={`/blog/${blog.id}`} 
              className="grid h-auto w-full grid-rows-[auto_1fr] lg:grid-rows-[100%] grid-cols-[auto_1fr] lg:grid-cols-[70%_8%_18%] gap-x-[2%] gap-y-2 items-center border-[#CCCCCC] p-6 px-0 md:p-4 md:pl-0 md:pr-0 border-b border-dotted hover:text-gray-300"
            >
              <p className="col-span-full lg:col-span-1 row-start-1 self-start justify-self-start">
                {blog.title}
              </p>
              <p className="row-start-2 lg:row-start-1 col-start-1 lg:col-start-2">
                <Date date={blog.publishedAt ?? blog.createdAt} displayType="year" />
              </p>
              <div className="row-start-2 lg:row-start-1 col-start-2 lg:col-start-3 flex gap-x-[4%] md:gap-x-4 justify-end md:justify-end">
                {blog.tags.slice(0, 1).map((tag, idx) => (
                  <p 
                    key={idx} 
                    className="rounded-[0.95em] border border-[#CCCCCC] px-3 md:px-4 py-[0.2em] text-[0.8rem] text-[#555555] dark:text-white"
                  >
                    {tag.title}
                  </p>
                ))}
              </div>
            </Link>
          </li>
        ))}
      </ul>

      {showPagination && (
        <div className="mt-8 flex justify-center gap-4">
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
