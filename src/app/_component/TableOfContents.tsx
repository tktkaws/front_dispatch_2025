import type { Toc } from "@/app/_libs/microcms";

type Props = {
  toc: Toc;
};
export default function TableOfContents({ toc }: Props) {
  return (
    <div className="sticky top-16 bg-white dark:bg-[#292D30] rounded-md p-4 mt-12">
      <h2 className="font-bold text-lg">目次</h2>
      <ul className="mt-4 grid gap-4 font-bold text-base">
        {toc.map((item) => (
          <li key={item.id}>
            <a 
              href={`#${item.id}`} 
              className={`flex items-center ${item.level === 3 ? 'ml-4' : ''}`}
            >
              <span className="mr-2 text-gray-200 scale-75">●</span>
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};