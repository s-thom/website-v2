import React from "react";
import Head from "next/head";

export default function DefaultHeadMetadata() {
  return (
    <Head>
      <title key="title">Stuart Thomson</title>
      <meta name="charset" content="utf-8" key="charset" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
        key="viewport"
      />
      <meta
        property="og:site_name"
        content="Stuart Thomson"
        key="og-site_name"
      />
      <meta property="og:type" content="website" key="og-type" />
      <meta name="theme-color" content="#15181A" key="theme-color" />
      <meta
        name="msapplication-TileColor"
        content="#15181A"
        key="ms-tilecolor"
      />
      <meta
        name="apple-mobile-web-app-status-bar"
        content="black-transparent"
        key="apple-status-bar"
      />
      <meta
        name="apple-mobile-web-app-capable"
        content="yes"
        key="apple-web-app"
      />
      <meta name="mobile-web-app-capable" content="yes" key="mobile-web-app" />
      {/* Icons */}
      <meta
        name="msapplication-square310x310logo"
        content="/static/icon/ms-310.png"
        key="ms-icon-310"
      />
      <meta
        name="msapplication-square150x150logo"
        content="/static/icon/ms-150.png"
        key="ms-icon-150"
      />
      <meta
        name="msapplication-square70x70logo"
        content="/static/icon/ms-70.png"
        key="ms-icon-70"
      />
      {/* General Properties */}
      <link rel="author" href="/humans.txt" key="humans" />
      <link rel="manifest" href="/manifest.json" key="manifest" />
      {/* Icons */}
      <link
        rel="icon"
        sizes="196x196"
        href="/static/icon/196.png"
        key="icon-196"
      />
      <link
        rel="icon"
        sizes="144x144"
        href="/static/icon/144.png"
        key="icon-144"
      />
      <link rel="icon" sizes="96x96" href="/static/icon/96.png" key="icon-96" />
      <link rel="icon" sizes="48x48" href="/static/icon/48.png" key="icon-48" />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/static/icon/apple-152.png"
        key="apple-icon-152"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/static/icon/apple-144.png"
        key="apple-icon-144"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/static/icon/apple-120.png"
        key="apple-icon-120"
      />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="/static/icon/apple-114.png"
        key="apple-icon-114"
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href="/static/icon/apple-76.png"
        key="apple-icon-76"
      />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href="/static/icon/apple-72.png"
        key="apple-icon-72"
      />
      <link
        rel="apple-touch-icon"
        sizes="57x57"
        href="/static/icon/apple-57.png"
        key="apple-icon-57"
      />
      <link
        rel="stylesheet"
        href="https://indestructibletype.com/fonts/Jost.css"
        type="text/css"
      />
    </Head>
  );
}
