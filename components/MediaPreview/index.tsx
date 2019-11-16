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
    <Link
      className="MediaPreview-title MediaPreview-title-link"
      href={media.link}
    >
      {media.title}
    </Link>
  ) : (
    <span className="MediaPreview-title">{media.title}</span>
  );
  const creatorLink = media.author ? (
    media.author.link ? (
      <Link
        className="MediaPreview-author MediaPreview-author-link"
        href={media.author.link}
      >
        {media.author.name}
      </Link>
    ) : (
      <span className="MediaPreview-author">{media.author.name}</span>
    )
  ) : (
    undefined
  );

  const image = media.img ? (
    <MdImage
      className="MediaPreview-img"
      alt={media.title}
      src={media.img}
      nocaption
    />
  ) : (
    undefined
  );
  const imageLink =
    image && media.link ? (
      <Link
        href={media.link}
        className="MediaPreview-img-wrapper MediaPreview-img-wrapper-link"
      >
        {image}
      </Link>
    ) : (
      <span className="MediaPreview-img-wrapper">{image}</span>
    );

  return (
    <div className="MediaPreview">
      <h3 className="MediaPreview-heading">
        {titleLink}
        {creatorLink && <> - {creatorLink}</>}
      </h3>
      {imageLink}
    </div>
  );
}
