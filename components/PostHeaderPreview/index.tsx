import React, { CSSProperties } from 'react';
import { PageMetadata } from '../../types';

// Poach styles from header, that way it only needs to be written once
import '../PostHeader/index.css';
import './index.css';

interface Props extends PageMetadata {
  showUrl?: boolean;
}

export default function PostHeaderPreview({
  title,
  img,
  bgcolor,
  path,
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

  if (showUrl && path) {
    headList.push(<p className="PostHeader-url" key="url">{path}</p>);
  }

  return (
    <header className={headClasses.join(' ')} style={headStyle} key={title}>{headList}</header>
  );
}
