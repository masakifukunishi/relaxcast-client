import Script from "next/script";

type GoogleAdsenseProps = {
  adsenseId: string;
};

const GoogleAdsense = ({ adsenseId }: GoogleAdsenseProps) => {
  if (process.env.NODE_ENV !== "production") {
    return null;
  }
  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseId}`}
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  );
};

export default GoogleAdsense;
