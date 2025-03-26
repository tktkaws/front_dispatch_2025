"use client";
import { useCallback, useState, useEffect } from "react";
import Image from 'next/image';

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 100;
      setIsVisible(show);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = useCallback(() => {
    // スクロールアニメーションの開始
    window.scrollTo({ top: 0, behavior: "smooth" });
    
    // スクロールが完了するまで監視して、確実にフォーカスを設定
    const checkScrollComplete = () => {
      if (window.scrollY === 0) {
        // スクロールが完了したらフォーカスを設定
        document.getElementById("main-content")?.focus();
      } else {
        // まだスクロール中なら再確認
        requestAnimationFrame(checkScrollComplete);
      }
    };
    
    // スクロール監視の開始
    setTimeout(() => requestAnimationFrame(checkScrollComplete), 100);
  }, []);
  return (
      <footer className="border-t border-gray-300 grid grid-cols-[4%_92%_4%] xl:grid-cols-[1fr_1200px_1fr] h-24 items-center self-end sm:grid-cols-[4%_92%_4%] bg-[#202024] text-white rounded-t-md">
      {isVisible && (
          <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex gap-8 z-50 lg:hidden">
            <button
                onClick={() => window.location.href = '/'}
                className="bg-[#202024] p-2 rounded-full shadow-lg shadow-black/25"
                aria-label="トップページへ移動"
              >
                <Image
                  src="/icon_home.svg"
                  alt=""
                  width={24}
                  height={24}
                />
              </button>
            <button
              onClick={scrollToTop}
              className="bg-[#202024] p-2 rounded-full shadow-lg shadow-black/25"
              aria-label="ページトップへ戻る"
            >
              <Image 
                src="/icon_top.svg" 
                alt="" 
                width={24} 
                height={24}
              />
            </button>
          </div>
        )}
        <small className="col-[2] w-fit justify-self-center self-end lg:self-center mb-2 lg:mb-0">&copy; Takayuki Takahashi</small>
      </footer>
  );
}
