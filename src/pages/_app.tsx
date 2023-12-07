import React from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
// eslint-disable-next-line import/no-unresolved
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { config } from "../config";
import { Layout } from "../components/Layout";
import "../styles/reset.css";

const _app: React.FC<AppProps> = ({ Component, pageProps, router }) => (
  <>
    <Head>
      <title>{config.name}</title>
      <link rel="icon" href="/icon.svg" />
      <link rel="mask-icon" color="white" href="/icon.svg" />
      <link rel="manifest" href="/manifest.webmanifest" />
      <meta name="description" content={config.title} />
      <meta name="image" content="/share-card.png" />
      {/* OpenGraph */}
      <meta property="og:site_name" content={config.name} />
      <meta property="og:url" content={process.env.NEXT_PUBLIC_VERCEL_URL} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={config.name} />
      <meta property="og:description" content={config.title} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:image" content="/share-card.png" />
      <meta property="og:image:alt" content={config.title} />
      {/* Twitter */}
      <meta name="twitter:title" content={config.name} />
      <meta name="twitter:description" content={config.title} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="/share-card.png" />
      <meta name="twitter:image:alt" content={config.name} />
      {/* iOS */}
      <link rel="apple-touch-icon" href="/app-icon-192.png" />
      <link
        // eslint-disable-next-line react/no-invalid-html-attribute
        rel="apple-touch-startup-image"
        href="/splash-screen.png"
        media="screen and (device-width: 320px) and (-webkit-device-pixel-ratio: 2)"
      />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />
      <meta
        name="viewport"
        content="viewport-fit=cover, width=device-width, height=device-height, initial-scale=1, user-scalable=no"
      />
    </Head>
    <Layout>
      <Component key={router.route} {...pageProps} />
    </Layout>
    <Analytics />
    <SpeedInsights />
  </>
);

export default _app;
