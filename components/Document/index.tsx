import React from "react";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";

export default class Document extends NextDocument {
  public render() {
    return (
      <Html
        prefix="og: http://ogp.me/ns# article: http://ogp.me/ns/article"
        lang="en"
      >
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
