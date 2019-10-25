import React from 'react';

import './index.css';

interface OptionalProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  nocaption?: boolean;
}

export default function MdImage(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  if ((props as OptionalProps).nocaption) {
    const clone = {...props};
    delete (clone as OptionalProps).nocaption;
    return <img  {...props} />;
  }

  const caption = props.title || props.alt;
  return (
    <figure className="FigureImage">
      <img src={props.src} title={caption} {...props} />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
