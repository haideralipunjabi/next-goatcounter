"use client"
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from "react";
import Script from "next/script";

export const GCScriptBase: React.FC<{ siteUrl: string, scriptSrc?: string }> = ({ siteUrl, scriptSrc }) => {
    const pathname = usePathname()
    const searchParams = useSearchParams()
    useEffect(() => {
        let url = `${pathname}`
        if (searchParams.size) {
            url += `?${searchParams}`
        }
        if (!window.goatcounter) return;
        window.goatcounter.count({
            path: url.slice(1),
            event: false,
        });
    }, [pathname, searchParams])
    useEffect(() => {
        if (siteUrl.endsWith("/count")) {
            siteUrl = siteUrl.substring(0, siteUrl.length - 6)
        }
        window.localStorage.setItem("siteUrl", siteUrl)
    }, [])
    return (
        <Script
            data-goatcounter={siteUrl}
            src={scriptSrc ?? "//gc.zgo.at/count.js"}
            strategy="afterInteractive"
        />
    );
}
