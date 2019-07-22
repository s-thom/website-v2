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
