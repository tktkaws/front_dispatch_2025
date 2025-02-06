import ContactForm from "@/app/component/ContactForm";
export default function About() {
  return (
    <main 
      id="main-content" 
      tabIndex={-1} 
      className="pt-12 grid grid-cols-[4%_92%_4%] xl:grid-cols-[1fr_1200px_1fr]"
    >
      <div className="col-[2]">
        <ContactForm/>
        {/* <h1>this is takayuki takahashi</h1>
        <h2>略歴</h2>
        <p>
        神奈川県平塚市在住<br />
        1986年生まれ<br />
        早稲田大学政治経済学部経済学科卒業<br />
        2024年1月から都内Web制作会社でコーダーとして勤務<br />
        アクセシビリティとモダンフロントエンド技術によるサイト制作に強い関心がある
        </p>
        <h2>経歴</h2>
        <h3>2011.03 大学卒業</h3>
        <p></p>
        <h3>2017.11 ワールドインテック入社</h3>
        <p></p>
        <h3>2020.07 ストレート入社</h3>
        <p></p>
        <h3>2024.01 都内のWeb制作会社に転職</h3>
        <p></p>
        
        <h2>業務経歴</h2>
        <h3>アクセシビリティ対応 JIS基準準拠を目指すサイトの改修</h3>
        <ul>
            <li>規模: 約100ページ</li>
            <li>役割: マークアップリーダー (チーム4名)</li>
            <li>使用技術: HTML5, CSS3, JavaScript, Sass, Git</li>
        </ul>
        <p></p>
        <h3>IRサイトリニューアル</h3>
        <ul>
            <li>規模: 約100ページ</li>
            <li>役割: マークアップリーダー (チーム4名)</li>
            <li>使用技術: HTML5, CSS3, JavaScript, Sass, Git</li>
        </ul>
        <p></p>
        <h3>Webサイト保守更新作業</h3>
        <ul>
            <li>規模: 約100ページ</li>
            <li>役割: マークアップリーダー (チーム4名)</li>
            <li>使用技術: HTML5, CSS3, JavaScript, Sass, Git</li>
        </ul>
        <p></p>
        <h2>お問い合わせ</h2>
        <a href="mailto:takayuki.takahashi.0126@gmail.com">takayuki.takahashi.0126@gmail.com</a>
        <a href="">github</a> */}
      </div>
    </main>
  );
}