import { Suspense } from "react";
import { GCScriptBase } from "./gcscript";


declare global {
  interface Window {
    goatcounter: any
  }
}

export const GCScript: React.FC<{ siteUrl: string, scriptSrc?: string }> = ({ siteUrl, scriptSrc }) => {

  return (
    <Suspense>
      <GCScriptBase siteUrl={siteUrl} scriptSrc={scriptSrc} />
    </Suspense>
  );
}
