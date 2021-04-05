import React from "react";

import Link from "../Link";

import "./index.css";

const Header = () => (
  <header className="PageHeader">
    <nav className="PageHeader-nav">
      <Link href="/" className="PageHeader-link">
        <div className="PageHeader-me">
          <img
            className="PageHeader-meImg"
            src="/static/img/profile.jpg"
            alt="Portrait of Stuart Thomson"
          />
        </div>
        <div className="PageHeader-navPart1">
          <h1 className="PageHeader-title">Stuart Thomson</h1>
        </div>
      </Link>
    </nav>
    <div className="PageHeader-archive">This website is archived. <a href="/">Read more...</a></div>
  </header>
);

export default Header;
