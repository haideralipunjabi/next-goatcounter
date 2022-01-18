export function GCEvent(path, title) {
    if (!window.goatcounter) return;
    window.goatcounter.count({
      path: path,
      title: title,
      event: true,
    });
  }