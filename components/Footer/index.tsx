import React from 'react';

import './index.css';

export default function Footer() {
  return (
    <footer className="PageFooter">
      <p className="PageFooter-text">
        <span className="PageFooter-fade">Copyright &copy; Stuart Thomson</span>
        <span className="PageFooter-fade"> | </span>
        <a href="mailto:me@sthom.kiwi" aria-label="Email">
          <span className="PageFooter-svg">
            <svg viewBox="0 0 24 24">
              <path d="M22 4H2v16h20V4zm-2 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </span>
        </a>
        <a href="https://github.com/s-thom" aria-label="GitHub">
          <span className="PageFooter-svg">
            <svg viewBox="0 0 24 24">
              <path d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 6.8 9.5c.5 0 .7-.2.7-.5v-1.7C6.7 20 6.1 18 6.1 18c-.4-1.2-1-1.5-1-1.5-1-.6 0-.6 0-.6 1 0 1.5 1 1.5 1 .9 1.6 2.4 1.1 3 .9 0-.7.3-1.1.6-1.4-2.2-.2-4.6-1-4.6-4.9 0-1.1.4-2 1-2.7 0-.3-.4-1.3.2-2.7 0 0 .8-.2 2.7 1a9.4 9.4 0 0 1 5 0c2-1.2 2.8-1 2.8-1 .5 1.4.1 2.4 0 2.7.7.7 1 1.6 1 2.7 0 3.8-2.3 4.7-4.5 5 .4.2.7.8.7 1.8V21c0 .3.2.6.7.5 4-1.3 6.8-5 6.8-9.5A10 10 0 0 0 12 2z"/>
            </svg>
          </span>
        </a>
        <span className="PageFooter-fade"> | </span>
        <span className="PageFooter-fade">
          <a href="https://github.com/s-thom/website-v2" aria-label="Website Source Code">
            &lt;/&gt;
          </a>
        </span>
      </p>
    </footer>
  );
}
