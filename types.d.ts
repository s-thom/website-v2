declare module '@mdx-js/react';

export interface PageMetaBase {
  title: string;
  bgcolor: string;
  img?: string;
}

export interface PageMeta extends PageMetaBase {
  github?: string;
  date?: string;
  edited?: string;
  url?: string;
}

export interface PageMetadata {
  title: string;
  published?: boolean;
  featured?: boolean;
  bgcolor?: string;
  img?: string;
  github?: string;
  date?: Date;
  edited?: Date;
  path?: string;
}

export interface BreadcrumbSegment {
  name: string;
  pathSegment: string;
}
