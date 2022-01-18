import { useRouter } from "next/router";
import { useEffect } from "react";
import Script from "next/script";

export function GCScript({ siteUrl, scriptSrc }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      if (!window.goatcounter) return;
      window.goatcounter.count({
        path: url.slice(1),
        event: false,
      });
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return (
    <Script
      data-goatcounter={siteUrl}
      src={scriptSrc ?? "//gc.zgo.at/count.js"}
      strategy="afterInteractive"
    />
  );
}
