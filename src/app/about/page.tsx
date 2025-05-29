import ContactForm from "@/app/_component/ContactForm";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | Front Dispatch",
  description: "Front Dispatchの運営者についての情報ページです。",
  openGraph: {
    title: "About | Front Dispatch",
    description: "Front Dispatchの運営者についての情報ページです。",
  },
};

export default function About() {
  return (
    <main className="pt-12 grid grid-cols-[4%_92%_4%] xl:grid-cols-[1fr_1200px_1fr] bg-[#F5F4F0] dark:bg-[#202024]">
      <div className="w-full h-full col-span-full grid grid-cols-subgrid">
        <div className="col-[2] grid grid-cols-[auto_1fr] place-items-center justify-start gap-x-8">
          <div className="pl-8 w-full row-start-1 col-span-full grid place-items-center justify-start py-20">
            <p className="w-full font-extrabold lg:text-5xl lg:leading-normal md:text-4xl md:leading-normal text-3xl leading-normal">
              About
            </p>
          </div>
        </div>
      </div>
      <div className="col-[2]">
        <article className="grid lg:grid-cols-[76%_20%] lg:gap-x-[4%] grid-cols-1">
          <div className="lg:col-start-2 row-start-1 col-start-1">
            <div className="sticky top-16 bg-white dark:bg-[#292D30] rounded-md p-4 mt-12">
              <h2 className="font-bold text-lg">目次</h2>
              <ul className="mt-4 grid gap-4 font-bold text-base">
                <li>
                  <a href="#001" className="flex items-center">
                    <span className="mr-2 text-gray-200 scale-75">●</span>略歴
                  </a>
                </li>
                {/* <li>
                  <a href="#002" className="flex items-center">
                    <span className="mr-2 text-gray-200 scale-75">●</span>経歴
                  </a>
                </li> */}
                <li>
                  <a href="#003" className="flex items-center">
                    <span className="mr-2 text-gray-200 scale-75">●</span>
                    業務経歴
                  </a>
                </li>
                <li>
                  <a href="#004" className="flex items-center">
                    <span className="mr-2 text-gray-200 scale-75">●</span>
                    お問い合わせ
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-start-1 my-12">
            <div className="p-4 lg:p-8 py-8 lg:py-16 rounded-md [&_h1]:scroll-mt-16 [&_h2]:scroll-mt-16 [&_h3]:scroll-mt-16 bg-white dark:text-white dark:bg-[#292D30]">
              <section>
                <h2
                  id="001"
                  className="text-2xl font-semibold mb-4 border-b pb-3"
                >
                  略歴
                </h2>
                <p className="text-base leading-relaxed mb-4">
                  2024年1月から都内Web制作会社でコーダーとして勤務
                  <br />
                  Webアクセシビリティとモダンフロントエンド技術によるサイト制作に強い関心がある
                  <br />
                  <Link href="/blog/ch91jpvx2" className="underline hover:no-underline">2025年5月にDHS Trusted Tester Certificationを取得</Link>
                  <br />
                  東京都墨田区在住
                  <br />
                  1986年生まれ
                  <br />
                  早稲田大学政治経済学部経済学科卒業
                  <br />
                  ラジオ お笑い HIPHOP カレー ビールを好んでいる
                </p>
              </section>
              {/* <section>
                <h2
                  id="002"
                  className="text-2xl font-semibold mt-8 mb-4 border-b pb-3"
                >
                  経歴
                </h2>
                <h3 className="mt-6 mb-3 font-bold">2011.03 大学卒業</h3>
                <p className="text-base leading-relaxed mb-4">
                  2010年卒として就活をしていたがリーマンショックにより苦戦し心身の調子を崩す
                  <br />
                  内定がないまま大学を卒業し飲食業のフリーターとして20代を終える
                  <br />
                  ブルーパブの開業を目標としていたが、味覚の解像度とアルコール耐性が一向に上がらなかったため断念した
                </p>
                <h3 className="mt-6 mb-3 font-bold">
                  2017.11 倉庫運営会社入社
                </h3>
                <p className="text-base leading-relaxed mb-4">
                  Amazonの巨大倉庫の運営を受託している企業に入社
                  <br />
                  倉庫内の作業員の時間毎の成績や勤怠情報などを管理していた
                  <br />
                  業務の所々でマクロが使用されていたが、改善の余地が多々あったため独学でVBAを学び、自動化を行った
                  <br />
                  プログラミングの楽しさを覚え、当時の流行に乗りWeb開発会社への転職を志した
                  <br />
                  1年間プログラミングスクールに通い、受託Web開発会社に転職した
                </p>
                <h3 className="mt-6 mb-3 font-bold">
                  2020.07 受託Web開発会社入社
                </h3>
                <p className="text-base leading-relaxed mb-4">
                  転職して1ヶ月絶たないうちに不眠症になり退職
                  <br />
                  コロナ禍での転職活動によるストレスが溜まっていた中、転居先の騒音が引き金となり発症した
                  <br />
                  1年程度休養後、派遣事務職として社会復帰
                </p>
                <h3 className="mt-6 mb-3 font-bold">
                  2024.01 都内のWeb制作会社に転職
                </h3>
                <p className="text-base leading-relaxed mb-4">
                  プログラミングを学んでいく中でフロントエンドへの興味が高まっており、Web制作方面にシフトした
                  <br />
                  半年間Web制作方面の独学をした後、都内のWeb制作会社にコーダーとして転職
                </p>
              </section> */}
              <section>
                <h2
                  id="003"
                  className="text-2xl font-semibold mt-8 mb-4 border-b pb-3"
                >
                  業務経歴
                </h2>
                <h3 className="mt-6 mb-3 font-bold">
                  コーポレートサイトのWebアクセシビリティ対応
                </h3>
                <dl className="mb-4 space-y-2">
                  <div className="flex">
                    <dt className="min-w-[80px]">ページ数</dt>
                    <dd>約20ページ</dd>
                  </div>
                  <div className="flex">
                    <dt className="min-w-[80px]">役割</dt>
                    <dd>コーディング</dd>
                  </div>
                  <div className="flex">
                    <dt className="min-w-[80px]">期間</dt>
                    <dd>2024.06 - 2024.07</dd>
                  </div>
                </dl>
                <p className="mt-4">
                  JIS X 8341-3:2016のAA基準準拠を目指すサイトの改修案件。
                  <br />
                  ハック的なマークアップが多く、アクセシビリティの改善が必要な箇所が多々あった。
                </p>
                <p className="mt-4">
                  <Link href="/blog/9pwypbz38vuk" className="underline hover:no-underline">
                  業務歴半年のコーダーがアクセシビリティ案件にアサインされた話
                  </Link>
                </p>
                <h3 className="mt-6 mb-3 font-bold">IRサイトリニューアル</h3>
                <dl className="mb-4 space-y-2">
                  <div className="flex">
                    <dt className="min-w-[80px]">ページ数</dt>
                    <dd>約30ページ</dd>
                  </div>
                  <div className="flex">
                    <dt className="min-w-[80px]">役割</dt>
                    <dd>コーディング</dd>
                  </div>
                  <div className="flex">
                    <dt className="min-w-[80px]">期間</dt>
                    <dd>2024.09 - 2024.12</dd>
                  </div>
                </dl>
                <p className="mt-4">
                  既存のコーポレートサイトのIRサイトのみのリニューアル。
                </p>
                {/* <h3 className="mt-6 mb-3 font-bold">
                  ディスクロージャー支援サービスの設置作業
                </h3>
                <dl className="mb-4 space-y-2">
                  <div className="flex">
                    <dt className="min-w-[80px]">ページ数</dt>
                    <dd>約10ページ</dd>
                  </div>
                  <div className="flex">
                    <dt className="min-w-[80px]">役割</dt>
                    <dd>コーディング</dd>
                  </div>
                  <div className="flex">
                    <dt className="min-w-[80px]">期間</dt>
                    <dd>2025.03 - 2025.03</dd>
                  </div>
                </dl>
                <p className="mt-4">
                  適時開示情報を管理するCMSから出力する情報を既存サイトに設置する
                  <br />
                  CMSが出力するXMLをパースし、既存のサイトのレイアウトに沿った構造で表示する
                </p> */}
              </section>
            </div>
          </div>
        </article>
        <aside className="grid lg:grid-cols-[76%_20%] lg:gap-x-[4%] grid-cols-1 mb-12">
          <section className="col-start-1">
            <div className="p-4 lg:p-8 py-8 lg:py-16 lg:pt-4 rounded-md [&_h1]:scroll-mt-16 [&_h2]:scroll-mt-16 [&_h3]:scroll-mt-16 bg-white dark:text-white dark:bg-[#292D30]">
              <h2
                id="004"
                className="text-2xl font-semibold mt-8 mb-8 border-b pb-3"
              >
                お問い合わせ
              </h2>
              <p className="text-base leading-relaxed mb-4">
                お問い合わせは下記のフォーム、
                <Link
                  href="https://x.com/takaws"
                  className="underline hover:no-underline"
                  target="_blank"
                >
                  X
                </Link>
                、
                <Link
                  href="mailto:takaws@gmail.com"
                  className="underline hover:no-underline"
                  target="_blank"
                >
                  メール
                </Link>
                からお願いします。
              </p>
              <ContactForm />
            </div>
          </section>
        </aside>
      </div>
    </main>
  );
}
