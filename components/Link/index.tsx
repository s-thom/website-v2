import NextLink from "next/link";
import React from "react";

export default function Link(
  props: React.AnchorHTMLAttributes<HTMLAnchorElement>
) {
  const { href } = props;

  const isExternalLink = href.match(/^(?:https?)?:?\/\/.*/);
  if (isExternalLink) {
    // External links should not be wrapped by next's Link
    return <a {...props} />;
  } else {
    // Clone props for <a>, but remove the href
    const linkProps = { ...props };
    delete linkProps.href;

    return (
      <NextLink href={href}>
        <a {...linkProps} />
      </NextLink>
    );
  }
}
