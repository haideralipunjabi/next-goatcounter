export function GCEvent(path:string , title:string ) {
    if (!window.goatcounter) return;
    window.goatcounter.count({
      path: path,
      title: title,
      event: true,
    });
  }

export async function getViewCount(path?: string): Promise<number | undefined> {
  const pathname = window.location.pathname;
  const siteUrl = window.localStorage.getItem("siteUrl");
  if (siteUrl) {
    const response = await fetch(siteUrl + "/counter/" + (path ? path : pathname) + ".json");
    if (response.ok) {
      const data = await response.json();
        return parseInt(data["count"].replace(" ", ""));
    }
  }
}