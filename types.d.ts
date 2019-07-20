interface PageMetaBase {
  title: string;
  bgcolor: string;
  img?: string;
}

interface PageMeta extends PageMetaBase {
  github?: string;
  date?: string;
  edited?: string;
  url?: string;
}

interface BreadcrumbSegment {
  name: string;
  pathSegment: string;
}
