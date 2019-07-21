import React from 'react';

import PostHeaderPreview from '../PostHeaderPreview';
import Link from 'next/link';

import './index.css';

interface Props {
  pages: PageMeta[];
  showTypes?: boolean;
}

export default function PostHeaderList({
  pages,
}: Props) {
  const sorted = [...pages].sort((a, b) => {
    if (!a.date) {
      return -1;
    }
    if (!b.date) {
      return 1;
    }
    const [aDate, bDate] = [a, b].map(d => new Date(d.date).getTime());
    return bDate - aDate;
  });

  return (
    <ul className="PostHeaderList">{
      sorted.map((page) => {
        const info = { ...page };

        const item = (
          <PostHeaderPreview { ...info } />
        );

        return (
          <li className="PostHeaderList-item" key={ info.title }>
            {info.url ? (
              <Link href={info.url}>
                {item}
              </Link>
            ) : item}
          </li>
        );
      })
    }</ul>
  );
}
