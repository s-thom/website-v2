import React from 'react';

import NextLink from 'next/link';

export default function Link(props: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const {
    href,
  } = props;

  // Clone props for <a>, but remove the href
  const linkProps = {...props};
  delete linkProps.href;

  return (
    <NextLink href={href}>
      <a {...linkProps} />
    </NextLink>
  );
}
