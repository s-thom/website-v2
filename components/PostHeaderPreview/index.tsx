import React, { CSSProperties } from 'react';

// Poach styles from header, that way it only needs to be written once
import '../PostHeader/index.css';
import './index.css';

interface Props extends PageMetaBase {
  url?: string;
  showUrl?: boolean;
}

export default function PostHeaderPreview({
  title,
  img,
  bgcolor,
  url,
  showUrl = false,
}: Props) {
  const headList = [];
  const headStyle: CSSProperties = {};
  const headClasses = [
    'PostHeaderPreview',
    'PostHeader',
  ];

  if (img) {
    headClasses.push('PostHeader-headerWImg');
    headStyle.backgroundImage = `url(${img})`;
  } else if (bgcolor) {
    headClasses.push('PostHeader-headerWColor');
    headStyle.backgroundColor = bgcolor;
  }

  if (title) {
    headList.push(<h1 className="PostHeader-heading" key="title">{ title }</h1>);
  }

  if (showUrl && url) {
    headList.push(<p className="PostHeader-url" key="url">{url}</p>);
  }

  return (
    <header className={headClasses.join(' ')} style={headStyle} key={title}>{headList}</header>
  );
}
