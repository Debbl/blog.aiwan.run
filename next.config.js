import createMDX from "@next/mdx";
import rehypeMdxCodeProps from "rehype-mdx-code-props";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({
  options: {
    rehypePlugins: [rehypeMdxCodeProps],
  },
});

export default withMDX(nextConfig);
