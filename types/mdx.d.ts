declare module '*.mdx' {
  let MDXComponent: (props) => JSX.Element;
  export default MDXComponent;
}

declare module "@mdx-js/react" {
  import { ComponentType, StyleHTMLAttributes } from "react";

  interface MDXProps {
    children: React.ReactNode;
    components: { wrapper: React.ReactNode };
  }
  export class MDXProvider extends React.Component<MDXProps> {}
}
