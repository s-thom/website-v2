import React from 'react';

import './index.css';

export default function MdImage(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  const caption = props.title || props.alt;
  return (
    <figure className="FigureImage">
      <img src={props.src} title={caption} {...props} />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
