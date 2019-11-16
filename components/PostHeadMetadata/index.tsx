import React from "react";
import Head from "next/head";

import { PageMetadata } from "../../types";

export default function PageMeta({
  title,
  path,
  description,
  img,
  date,
  edited,
  tags
}: PageMetadata) {
  const meta = [
    <meta property="og:type" content="article" key="og-type" />,
    <meta property="og:title" content={title} key="og-title" />,
    <meta
      property="og:url"
      content={`https://sthom.kiwi${path}`}
      key="og-url"
    />,
    <meta
      property="twitter:card"
      content={img ? "summary_large_image" : "summary"}
      key="tw-card"
    />,
    <meta property="twitter:title" content={title} key="tw-title" />
  ];

  if (description) {
    meta.push(
      <meta
        property="og:description"
        content={description}
        key="og-description"
      />,
      <meta property="description" content={description} key="tw-desc" />,
      <meta property="twitter:description" content={description} key="desc" />
    );
  }

  if (img) {
    meta.push(
      <meta property="twitter:image" content={img} key="og-image" />,
      <meta property="og:image" content={img} key="tw-image" />
    );
  }

  if (date) {
    const editedDate = edited || date;

    meta.push(
      <meta
        property="article:published_time"
        content={date.toISOString()}
        key="og-published"
      />,
      <meta
        property="article:modified_time"
        content={editedDate.toISOString()}
        key="og-modified"
      />
    );
  }

  if (tags) {
    tags.forEach(t => {
      meta.push(
        <meta property="article:tag" content={t} key={`og-tag-${t}`} />
      );
    });
  }

  return (
    <Head>
      <title key="title">{title}</title>
      {meta}
    </Head>
  );
}
