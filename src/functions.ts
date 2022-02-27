export function GCEvent(path:string , title:string ) {
    if (!window.goatcounter) return;
    window.goatcounter.count({
      path: path,
      title: title,
      event: true,
    });
  }