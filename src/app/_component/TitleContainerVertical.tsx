export default function TitleContainer() {
    return (
      <div className="h-auto md:h-[20rem] lg:h-[25rem] grid justify-between items-center md:items-end">
        <div className="grid items-start uppercase font-black xl:text-6xl lg:text-6xl md:text-5xl text-3xl">
          <p className="pt-8 pb-8 md:pt-0 md:pb-0 h-fit w-fit leading-[1]">
            front <br />
            dispatch
          </p>
        </div>
        <div className="pt-8 pb-8 md:pt-0 md:pb-0 w-full text-base">
          {/* <p>
            アクセシビリティ、フロントエンドに関する技術が中心のブログです。
          </p>
          <p>自身の知識を整理することが目的です。</p> */}
        </div>
      </div>
    );
  }
  