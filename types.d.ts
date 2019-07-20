type PageLayoutEnum = 'Post' | 'Project';

interface PageMeta {
  title: string;
  layout: PageLayoutEnum;
  bgcolor: string;
  img?: string;
  github?: string;
  date: string;
  edited?: string;
}
