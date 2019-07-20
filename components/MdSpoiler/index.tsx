import React from 'react';

import './index.css';

interface Props {
  title?: string;
}

export default function MdSpoiler({
  title = 'Spoiler',
  children,
}: React.PropsWithChildren<Props>) {
  return (
    <span className="MdSpoiler">
      <span className="MdSpoiler-title">{title}</span>
      <span className="MdSpoiler-text">{children}</span>
    </span>
  );
}
