'use client';

import Script from 'next/script';

type AnalyticsProps = {
  id: string;
  ck: string;
  autoTrack?: boolean;
  hashMode?: boolean;
};

declare global {
  interface Window {
    LA?: {
      init: (config: AnalyticsProps) => void;
    };
  }
}

export function Analytics() {
  return (
    <Script
      id="LA_COLLECT"
      src="//sdk.51.la/js-sdk-pro.min.js"
      strategy="afterInteractive"
      onLoad={() =>
        window.LA?.init({
          id: '3R56IaFIdWiyQRbj',
          ck: '3R56IaFIdWiyQRbj',
          hashMode: true,
          autoTrack: true,
        })
      }
    />
  );
}
