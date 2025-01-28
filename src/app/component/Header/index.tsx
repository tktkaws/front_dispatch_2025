import Link from 'next/link';
import ColorThemeSelector from '../ColorThemeSelector';

export default function Header() {
  return (
    <header className="fixed grid grid-flow-col items-center grid-cols-[4%_92%_4%] xl:grid-cols-[1fr_1200px_1fr] w-full h-12 z-10 font-bold bg-white/90 dark:bg-black/90 dark:text-white backdrop-blur-sm uppercase">
        <div className="row-[1] col-[2] justify-self-start">
          <Link href="/">Front Dispatch</Link>
        </div>
        <nav className="row-[1] col-[2] justify-self-end">
          <ul className="grid grid-flow-col justify-end items-center gap-8">
            <li>
              <Link href="/">blog</Link>
            </li>
            <li>
              <Link href="/about">about</Link>
            </li>
            <li>
              <ColorThemeSelector />
            </li>
          </ul>
        </nav>
      </header>
  );
}
