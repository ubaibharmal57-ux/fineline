'use client';

import { useEffect } from 'react';

export default function JustDialBadge() {
  useEffect(() => {
    // Load JustDial widget script if not already loaded
    if (!document.querySelector('script[src="https://www.justdial.com/Jd-Widget"]')) {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://www.justdial.com/Jd-Widget';
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div className="flex flex-col items-center gap-2">
      <p className="text-sm font-semibold text-fss-neutral-900">150+ Reviews on JustDial</p>
      <div id="JdBadge" data-s1="b2" data-s2="Y3RyY3QlNDAlNDAlNDAwMjgxUFgyODElMkJYMjgxJTJCMTIzMTc1ODEyMFc0WTFNOCUyQkRD"></div>
      <div id="JdBadgeDest"></div>
    </div>
  );
}

