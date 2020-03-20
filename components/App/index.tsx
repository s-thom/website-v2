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

interface MyAppState {
  editable: boolean;
}

const componentsMap: ComponentMap = {
  a: Link,
  img: MdImage
};

export default class MyApp extends App<any, any, MyAppState> {
  public constructor(props: any) {
    super(props);

    this.state = {
      editable: false
    };

    this.toggleEditable = this.toggleEditable.bind(this);
  }

  public toggleEditable() {
    this.setState({ editable: !this.state.editable });
  }

  public render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <DefaultHeadMetadata />
        <MDXProvider components={componentsMap}>
          <div className="App">
            <Header />
            <div className="App-content" contentEditable={this.state.editable}>
              <Component {...pageProps} />
            </div>
            <Footer onEditClick={this.toggleEditable} />
          </div>
        </MDXProvider>
      </>
    );
  }
}
