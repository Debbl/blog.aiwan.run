import type { MDXComponents } from "mdx/types";
import type { SandpackInternal } from "@codesandbox/sandpack-react/types";
import Sandpack from "./components/Sandpack";
import Header from "./components/Header";

interface SandpackChildrenProps {
  filename?: string;
  children: { props: { children: string } };
}

type SandpackInternalParams = Parameters<SandpackInternal>[0];

interface SandpackProps extends SandpackInternalParams {
  children:
    | Array<{
        props: SandpackChildrenProps;
      }>
    | { props: SandpackChildrenProps };
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    Header: (props: { title: string }) => {
      const { title = "" } = props;

      return <Header title={title} />;
    },
    Sandpack: (props: SandpackProps) => {
      const { children, ..._props } = props;

      const files: Record<string, string> = {};

      if (Array.isArray(children)) {
        children.forEach((child) => {
          const filename = child.props.filename || "index.js";
          const fileContent = child.props.children.props.children;
          files[filename] = fileContent;
        });
      } else {
        const filename = children.props.filename || "index.js";
        const fileContent = children.props.children.props.children;
        files[filename] = fileContent;
      }

      return <Sandpack files={files} {..._props} />;
    },

    ...components,
  };
}
