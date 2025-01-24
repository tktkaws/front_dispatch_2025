import styles from "./index.module.css";

export default function TitleContainer() {
  return (
    <div>
      <div className="grid justify-start items-start pt-16 md:pt-20 lg:pt-24 xl:pt-32 pb-16 md:pb-20 lg:pb-24 xl:pb-32 uppercase font-black font-noto-sans-jp xl:text-6xl lg:text-5xl md:text-4xl text-3xl">
        <p className="h-fit w-fit leading-[1]">
          front <br />
          dispatch
        </p>
      </div>
      <div className="w-full text-base">
        <p>
          アクセシビリティ、モダンフロントエンド関係を中心とした技術ブログです。
        </p>
        <p>自身の知識を整理することを第一の目的としています。</p>
      </div>
    </div>
  );
}
