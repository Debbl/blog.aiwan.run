import createMDX from "@next/mdx";
import rehypeMdxCodeProps from "rehype-mdx-code-props";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import remarkHeaderify from "remark-headerify";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [
      remarkFrontmatter,
      remarkHeaderify,
      [remarkMdxFrontmatter, { name: "metadata" }],
    ],
    rehypePlugins: [rehypeMdxCodeProps],
  },
});

export default withMDX(nextConfig);
