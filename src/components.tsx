import { ReactNode, Suspense } from "react";
import { GCScriptBase } from "./gcscript";
import { ViewCountBase } from "./viewcount";


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

export const ViewCount: React.FC<{ path?: string, fallback?: ReactNode }> = ({ path, fallback }) => {
  return (
    <Suspense fallback={fallback}>
      <ViewCountBase path={path} />
    </Suspense>
  );
}

export const TotalViews: React.FC<{ fallback?: ReactNode }> = ({ fallback }) => {
  return (
    <Suspense fallback={fallback}>
      <ViewCountBase path="TOTAL" />
    </Suspense>
  );
}