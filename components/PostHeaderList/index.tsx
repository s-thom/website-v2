import React from "react";
import Link from "../Link";

import PostHeaderPreview from "../PostHeaderPreview";
import { PageMetadata } from "../../types";

import "./index.css";

interface Props {
  pages: PageMetadata[];
  showTypes?: boolean;
}

export default function PostHeaderList({ pages }: Props) {
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
    <ul className="PostHeaderList">
      {sorted.map(page => {
        const info = { ...page };

        const item = <PostHeaderPreview {...info} />;

        return (
          <li className="PostHeaderList-item" key={info.path}>
            {info.path ? (
              <Link href={info.path} aria-label={info.title}>
                {item}
              </Link>
            ) : (
              item
            )}
          </li>
        );
      })}
    </ul>
  );
}
