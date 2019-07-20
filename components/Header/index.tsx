import React from 'react';

import Link from 'next/link';

const Header = () => (
  <header className="PageHeader">
    <nav className="PageHeader-nav">
      <Link href="/">
        <a className="PageHeader-link">
          <div className="PageHeader-me">
            <img
              className="PageHeader-meImg"
              src="/assets/img/me.jpg"
              alt="Portrait of Stuart Thomson"
            />
          </div>
          <div className="PageHeader-navPart1">
            <h1 className="PageHeader-title">Stuart Thomson</h1>
          </div>
        </a>
      </Link>
    </nav>
    <style jsx>{`
      .PageHeader {
        color: #EEE;
        background: #15181A;
        width: 100%;
      }

      .PageHeader-nav {
        display: flex;
        flex-direction: row;
        justify-content: center;
        max-width: 60rem;
        margin: 0 auto;
        padding: 0;
        line-height: 3rem;
      }

      .PageHeader-navPart1 {
        display: flex;
        flex-direction: row;
      }

      .PageHeader-me {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 1.25em;
      }

      .PageHeader-meImg {
        border-radius: 100%;
        max-width: 60px;
        max-height: 60px;
      }

      .PageHeader-title {
        font-size: 2.5em;
        margin: 0;
        padding: 0.5em;
        font-family: 'Roboto Mono', monospace;
      }

      .PageHeader-link {
        display: flex;
        align-items: center;
        padding: 0 var(--nav-item-padding);
        color: inherit;
        text-decoration: none;
      }

      .PageHeader-link svg {
        fill: currentColor;
        opacity: 0.5;
        margin-right: 0.5rem;
        width: 1.5rem;
        height: 1.5rem;
        vertical-align: middle;
      }
    `}</style>
  </header>
);

export default Header;
