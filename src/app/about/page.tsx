import ContactForm from "@/app/component/ContactForm";
import TitleContainer from "../component/TitleContainer";
export default function About() {
  return (
    <main 
      id="main-content" 
      tabIndex={-1} 
      className="pt-12 grid grid-cols-[4%_92%_4%] xl:grid-cols-[1fr_1200px_1fr]"
    >
      <div className="col-[2] prose prose-slate dark:prose-invert max-w-none">
        <TitleContainer/>
        {/* <h1 className="text-3xl font-semibold mb-6">this is takayuki takahashi</h1> */}
        <h2 className="text-2xl font-semibold mt-8 mb-4 border-b pb-3">略歴</h2>
        <p className="text-base leading-relaxed mb-4">
          神奈川県平塚市在住<br />
          1986年生まれ<br />
          早稲田大学政治経済学部経済学科卒業<br />
          2024年1月から都内Web制作会社でコーダーとして勤務<br />
          アクセシビリティとモダンフロントエンド技術によるサイト制作に強い関心がある
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4 border-b pb-3">経歴</h2>
        <h3 className="text-lg font-medium mt-6 mb-3">2011.03 大学卒業</h3>
        <p className="mb-4"></p>

        <h3 className="text-lg font-medium mt-6 mb-3">2017.11 倉庫運営会社入社</h3>
        <p className="mb-4"></p>
        <h3 className="text-lg font-medium mt-6 mb-3">2020.07 受託Web開発会社入社</h3>
        <p className="mb-4"></p>

        <h3 className="text-lg font-medium mt-6 mb-3">2024.01 都内のWeb制作会社に転職</h3>
        <p className="mb-4"></p>
        

        <h2 className="text-2xl font-semibold mt-8 mb-4 border-b pb-3">業務経歴</h2>
        <h3 className="text-xl font-medium mt-6 mb-3">アクセシビリティ対応 JIS基準準拠を目指すサイトの改修</h3>
        <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>規模: 約100ページ</li>
            <li>役割: マークアップリーダー (チーム4名)</li>
            <li>使用技術: HTML5, CSS3, JavaScript, Sass, Git</li>
        </ul>
        <p className="mb-4"></p>
        <h3 className="text-xl font-medium mt-6 mb-3">IRサイトリニューアル</h3>
        <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>規模: 約100ページ</li>
            <li>役割: マークアップリーダー (チーム4名)</li>
            <li>使用技術: HTML5, CSS3, JavaScript, Sass, Git</li>
        </ul>
        <p className="mb-4"></p>
        <h3 className="text-xl font-medium mt-6 mb-3">Webサイト保守更新作業</h3>
        <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>規模: 約100ページ</li>
            <li>役割: マークアップリーダー (チーム4名)</li>
            <li>使用技術: HTML5, CSS3, JavaScript, Sass, Git</li>
        </ul>
        <p className="mb-4"></p>
        <div className="flex gap-4 mt-8">
          <a 
            href="mailto:takayuki.takahashi.0126@gmail.com" 
            className="text-blue-600 hover:underline"
          >
            takayuki.takahashi.0126@gmail.com
          </a>
          <a 
            href="" 
            className="text-blue-600 hover:underline"
          >
            github
          </a>
        </div>
        <div className="mt-8">
          <ContactForm/>
        </div>
      </div>
    </main>
  );
}