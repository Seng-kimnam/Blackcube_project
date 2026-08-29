import { useEffect } from "react";

export default function AdBanner() {
  useEffect(() => {
    try {
      // @ts-ignore
      const adsbygoogle = (window.adsbygoogle = window.adsbygoogle || []);
      adsbygoogle.push({});
    } catch (error) {
      console.error("AdSense error:", error);
    }
  }, []);

  return (
    <div className="flex w-full justify-center px-4 py-3">
      <ins
        className="adsbygoogle"
        style={{
          display: "block",
          width: "100%",
          maxWidth: "980px",
          minHeight: "90px",
          textAlign: "center",
        }}
        data-ad-client="ca-pub-2427637620822139"
        data-ad-slot="1411294714"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
