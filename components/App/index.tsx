import React from 'react';
import App, { Container } from 'next/app';
import {MDXProvider} from '@mdx-js/react';
import Header from '../Header';
import Footer from '../Footer';
import DefaultHeadMetadata from '../DefaultHeadMetadata';

import './index.css';
import './index.global.css';
import 'prismjs/themes/prism-tomorrow.css';
import Link from '../Link';
import MdImage from '../MdImage';

interface ComponentMap {
  [id: string]: React.ComponentType;
}

const componentsMap: ComponentMap = {
  a: Link,
  img: MdImage,
};

export default class MyApp extends App {
  public render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <DefaultHeadMetadata />
        <MDXProvider components={componentsMap}>
          <div className="App">
            <Header/>
            <div className="App-content">
              <Component {...pageProps} />
            </div>
            <Footer />
          </div>
        </MDXProvider>
      </Container>
    );
  }
}
