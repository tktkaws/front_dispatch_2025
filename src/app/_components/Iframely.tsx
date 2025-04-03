'use client';

import { useEffect } from 'react';

type Props = {
  url: string;
};

export default function Iframely({ url }: Props) {
  useEffect(() => {
    // iframelyのスクリプトを動的に読み込み
    const script = document.createElement('script');
    script.src = "//cdn.iframe.ly/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // クリーンアップ時にスクリプトを削除
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="iframely-embed">
      <div className="iframely-responsive" style={{ paddingBottom: '56.2359%', paddingTop: '120px' }}>
        <a 
          href={url}
          data-iframely-url={`//cdn.iframe.ly/api/iframe?url=${encodeURIComponent(url)}&key=c271a3ec77ff4aa44d5948170dd74161`}
        />
      </div>
    </div>
  );
} 