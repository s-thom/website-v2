import React from 'react';
import App, { Container, AppInitialProps } from 'next/app';
import { NextComponentType, NextPageContext } from 'next';
import {MDXProvider} from '@mdx-js/react';
import Header from '../Header';
import Footer from '../Footer';

import './index.css';
import './index.global.css';
import Link from '../Link';

interface InitialPropsProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Component: NextComponentType<NextPageContext, any, {}>;
  ctx: NextPageContext;
}

interface ComponentMap {
  [id: string]: React.ComponentType;
}

const componentsMap: ComponentMap = {
  a: Link,
};

export default class MyApp extends App {
  public static async getInitialProps({ Component, ctx }: InitialPropsProps): Promise<AppInitialProps> {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  public render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
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
