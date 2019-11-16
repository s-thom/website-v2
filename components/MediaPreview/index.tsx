import React from "react";
import Link from "../Link";
import { PageMetadata } from "../../types";

import "./index.css";
import MdImage from "../MdImage";

export interface MediaAuthor {
  name: string;
  link?: string;
}

export interface MediaDescription {
  title: string;
  link?: string;
  img?: string;
  dateAdded?: string;
  author?: MediaAuthor;
}

interface MediaPreviewProps extends PageMetadata {
  media: MediaDescription;
}

export default function MediaPreview({ media }: MediaPreviewProps) {
  const titleLink = media.link ? (
    <Link href={media.link}>{media.title}</Link>
  ) : (
    <span>{media.title}</span>
  );
  const creatorLink = media.author ? (
    media.author.link ? (
      <Link href={media.author.link}>{media.author.name}</Link>
    ) : (
      <span>{media.author.name}</span>
    )
  ) : (
    undefined
  );

  return (
    <div className="MediaPreview">
      <h3>
        {titleLink}
        {creatorLink && <> - {creatorLink}</>}
      </h3>
      <MdImage alt={media.title} src={media.img} nocaption />
    </div>
  );
}
