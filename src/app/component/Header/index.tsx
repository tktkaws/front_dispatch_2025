export default function Header() {
  return (
    <header className="fixed grid grid-flow-col items-center grid-cols-[4%_92%_4%] xl:grid-cols-[1fr_1200px_1fr] w-full h-12 z-10 font-bold bg-white/90 backdrop-blur-sm uppercase">
        <div className="row-[1] col-[2] justify-self-start">
          <a href="/">Front Dispatch</a>
        </div>
        <nav className="row-[1] col-[2] justify-self-end">
          <ul className="grid grid-flow-col justify-end items-center gap-8">
            <li>
              <a href="/">blog</a>
            </li>
            <li>
              <a href="/about/">about</a>
            </li>
          </ul>
        </nav>
      </header>
  );
}
