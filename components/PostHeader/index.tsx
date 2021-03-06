import React, { CSSProperties } from "react";
import { useRouter } from "next/router";

import Link from "../Link";
import PostHeadMetadata from "../PostHeadMetadata";
import { dateStr } from "../util";
import { PageMetadata } from "../../types";

import "./index.css";

interface BreadcrumbSegment {
  name: string;
  pathSegment: string;
}

interface PostHeaderProps extends PageMetadata {
  showBreadcrumbs?: boolean;
}

export default function PostHeader(props: PostHeaderProps) {
  const {
    title,
    img,
    bgcolor,
    date,
    edited,
    github,
    path,
    showBreadcrumbs = true
  } = props;
  const router = useRouter();

  const headList = [];
  const headStyle: CSSProperties = {};
  const headClasses = ["PostHeader"];
  let titleElement = null;

  if (img) {
    headClasses.push("PostHeader-headerWImg");
    headStyle.backgroundImage = `url(${img})`;
  } else if (bgcolor) {
    headClasses.push("PostHeader-headerWColor");
    headStyle.backgroundColor = bgcolor;
  }
  if (title) {
    titleElement = (
      <h1 className="PostHeader-heading" key="title">
        {title}
      </h1>
    );
  }
  const pageDate = date ? new Date(date) : null;
  const editDate = edited ? new Date(edited) : null;

  // Add post/edit time to header
  const dateNodes = [];
  if (pageDate) {
    dateNodes.push(
      <p className="PostHeader-date" key="PostHeader-dateOriginal">
        <em>
          <time dateTime={pageDate.toISOString()}>{dateStr(pageDate)}</time>
        </em>
      </p>
    );
  }
  if (editDate) {
    dateNodes.push(
      <p className="PostHeader-date" key="PostHeader-dateEdited">
        <em>
          <time dateTime={editDate.toISOString()}>
            Edited: {dateStr(editDate)}
          </time>
        </em>
      </p>
    );
  }

  // Add GitHub URL
  if (github) {
    headList.push(
      <p className="PostHeader-github" key="github">
        <Link href={`https://github.com/${github}`}>
          <span className="PostHeader-svg">
            <svg viewBox="0 0 24 24">
              <path d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 6.8 9.5c.5 0 .7-.2.7-.5v-1.7C6.7 20 6.1 18 6.1 18c-.4-1.2-1-1.5-1-1.5-1-.6 0-.6 0-.6 1 0 1.5 1 1.5 1 .9 1.6 2.4 1.1 3 .9 0-.7.3-1.1.6-1.4-2.2-.2-4.6-1-4.6-4.9 0-1.1.4-2 1-2.7 0-.3-.4-1.3.2-2.7 0 0 .8-.2 2.7 1a9.4 9.4 0 0 1 5 0c2-1.2 2.8-1 2.8-1 .5 1.4.1 2.4 0 2.7.7.7 1 1.6 1 2.7 0 3.8-2.3 4.7-4.5 5 .4.2.7.8.7 1.8V21c0 .3.2.6.7.5 4-1.3 6.8-5 6.8-9.5A10 10 0 0 0 12 2z" />
            </svg>
          </span>{" "}
          {github}
        </Link>
      </p>
    );
  }

  // Breadcrumbs
  const crumbsPath = path || router.pathname;
  if (showBreadcrumbs) {
    const breadcrumbs: BreadcrumbSegment[] = crumbsPath
      .split("/")
      .filter(Boolean) // Remove leading and trailing slashes
      .map((segment, index, arr) => {
        if (index === arr.length - 1) {
          return {
            name: title,
            pathSegment: segment
          };
        } else {
          return {
            name: segment,
            pathSegment: segment
          };
        }
      });

    // Add home page on front if needed
    if (crumbsPath.match(/^\//)) {
      breadcrumbs.unshift({
        name: "Home",
        pathSegment: ""
      });
    }

    if (breadcrumbs.length > 1) {
      const crumbs: JSX.Element[] = [];

      for (let i = 0; i < breadcrumbs.length; i++) {
        const crumb = breadcrumbs[i];

        // Add separator if not the first item
        if (i !== 0) {
          crumbs.push(<span key={`spacer-${i}`}> &gt; </span>);
        }

        // Get full path for this segment
        const path = breadcrumbs
          .slice(0, i + 1)
          .map(segment => segment.pathSegment)
          .filter(Boolean)
          .join("/");

        crumbs.push(
          <Link className="PostHeader-crumb" href={`/${path}`} key={`bc-${i}`}>
            {crumb.name}
          </Link>
        );
      }

      headList.push(
        <nav className="PostHeader-breadcrumbs" key="breadcrumbs">
          {crumbs}
        </nav>
      );
    }
  }

  return (
    <header className={headClasses.join(" ")} style={headStyle}>
      <PostHeadMetadata {...props} path={crumbsPath} />
      {titleElement}
      <div className="PostHeader-detail">
        <div className="PostHeader-items">{headList}</div>
        <div className="PostHeader-date">{dateNodes}</div>
      </div>
      {pageDate && !props.published && (
        <p className="PostHeader-unpublished">Unpublished</p>
      )}
    </header>
  );
}
