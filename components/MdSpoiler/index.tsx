import React from 'react';

import './index.css';

interface Props {
  title?: string;
  /**
   * @deprecated Use children instead
   */
  text?: string;
}

export default function MdSpoiler({
  title = 'Spoiler',
  text,
  children,
}: React.PropsWithChildren<Props>) {
  return (
    <span className="MdSpoiler">
      <span className="MdSpoiler-title">{title}</span>
      <span className="MdSpoiler-text">{text || children}</span>
    </span>
  );
}
