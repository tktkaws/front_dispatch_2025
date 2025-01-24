import type { Blog } from "@/app/_libs/microcms";
import Date from "@/app/component/Date";
import Link from "next/link";
import Image from 'next/image';

type Props = {
  data: Blog[];
};

export default function CardList({ data }: Props) {
  return (
    <ul className="mt-8 grid w-full grid-cols-1 lg:grid-cols-2 justify-center gap-8">
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
                  className="whitespace-nowrap rounded-[0.95em] border border-[#CCCCCC] px-3 md:px-4 py-[0.2em] text-[0.8rem] text-[#555555]"
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
  );
}
