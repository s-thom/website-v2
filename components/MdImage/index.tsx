import React from "react";

import "./index.css";

interface MdImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  nocaption?: boolean;
}

export default function MdImage(props: MdImageProps) {
  if (props.nocaption) {
    const clone = { ...props };
    delete clone.nocaption;
    return <img {...clone} />;
  }

  const caption = props.title || props.alt;
  return (
    <figure className="FigureImage">
      <img src={props.src} title={caption} {...props} />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
