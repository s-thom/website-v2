import React from 'react';
import Link from '../Link';
import PostHeaderPreview from '../PostHeaderPreview';

import './index.css';

interface Props {
  title: string;
  href: string;
  img?: string;
  bgcolor?: string;
}

export default function LargeLink({
  title,
  img,
  bgcolor,
  href,
}: Props) {
  return (
    <Link href={href} className="LargeLink">
      <PostHeaderPreview
        title={title}
        img={img}
        bgcolor={bgcolor}
        path={href}
        showUrl={true}
      />
    </Link>
  );
}
