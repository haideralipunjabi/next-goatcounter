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

    return (
        <Script
            data-goatcounter={siteUrl}
            src={scriptSrc ?? "//gc.zgo.at/count.js"}
            strategy="afterInteractive"
        />
    );
}
