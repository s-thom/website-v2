import React from 'react';
import App, { Container, AppInitialProps } from 'next/app';
import { NextComponentType, NextPageContext } from 'next';

interface InitialPropsProps {
  Component: NextComponentType<NextPageContext, any, {}>;
  ctx: NextPageContext;
}

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }: InitialPropsProps): Promise<AppInitialProps> {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    );
  }
}
