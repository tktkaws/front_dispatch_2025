"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Tag {
  id: string;
  title: string;
}

interface TagListProps {
  tags: Tag[];
}

export default function TagList({ tags }: TagListProps) {
  const currentPath = usePathname();

  return (
    <ul className="mt-8 gap-4 h-fit flex flex-wrap md:gap-y-4">
      <li>
        <Link
          href="/"
          className={`text-gray-600 px-4 py-1 border border-gray-300 rounded-full text-sm hover:outline hover:outline-[0.125rem] hover:outline-current hover:border-white ${
            currentPath === "/" ? "bg-black text-white border-black" : ""
          }`}
        >
          ALL
        </Link>
      </li>
      {tags.map((tag) => (
        <li key={tag.id}>
          <Link
            href={`/tags/${tag.id}`}
            className={`text-gray-600 px-4 py-1 border border-gray-300 rounded-full text-sm hover:outline hover:outline-[0.125rem] hover:outline-current hover:border-white ${
              currentPath === `/tags/${tag.id}` ? "bg-black text-white border-black" : ""
            }`}
          >
            {tag.title}
          </Link>
        </li>
      ))}
    </ul>
  );
} 