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
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.getElementById("main-content")?.focus();
  }, []);
  return (
      <footer className="mt-8 border-t border-gray-300 grid grid-cols-[4%_92%_4%] xl:grid-cols-[1fr_1200px_1fr] h-24 items-center self-end sm:grid-cols-[4%_92%_4%] ">
      {isVisible && (
          <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex gap-8 z-50 lg:hidden">
            <button
                onClick={() => window.location.href = '/'}
                className="bg-black p-2 rounded-full shadow-lg shadow-black/25"
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
              className="bg-black p-2 rounded-full shadow-lg shadow-black/25"
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
