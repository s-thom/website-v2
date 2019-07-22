import React from 'react';

import './index.css';

export default function MdImage(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <figure className="FigureImage">
      <img src={props.src} title={props.title || props.alt} {...props} />
      <figcaption>{props.alt}</figcaption>
    </figure>
  );
}
