import React from 'react';
import App, { Container, AppInitialProps } from 'next/app';
import { NextComponentType, NextPageContext } from 'next';
import Header from '../Header';
import Footer from '../Footer';

import './index.css';
import './index.global.css';

interface InitialPropsProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Component: NextComponentType<NextPageContext, any, {}>;
  ctx: NextPageContext;
}

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
        <div className="App">
          <Header/>
          <div className="App-content">
            <Component {...pageProps} />
          </div>
          <Footer />
        </div>
      </Container>
    );
  }
}
