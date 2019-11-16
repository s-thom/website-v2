import { MDXProvider } from "@mdx-js/react";
import App from "next/app";
import "prismjs/themes/prism-tomorrow.css";
import React from "react";
import DefaultHeadMetadata from "../DefaultHeadMetadata";
import Footer from "../Footer";
import Header from "../Header";
import Link from "../Link";
import MdImage from "../MdImage";
import "./index.css";
import "./index.global.css";

interface ComponentMap {
  [id: string]: React.ComponentType;
}

const componentsMap: ComponentMap = {
  a: Link,
  img: MdImage
};

export default class MyApp extends App {
  public render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <DefaultHeadMetadata />
        <MDXProvider components={componentsMap}>
          <div className="App">
            <Header />
            <div className="App-content">
              <Component {...pageProps} />
            </div>
            <Footer />
          </div>
        </MDXProvider>
      </>
    );
  }
}
