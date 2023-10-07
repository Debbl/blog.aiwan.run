import Link from "next/link";
import "./markdown.css";

export default function PostsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <body className="markdown-body">
      <header>
        <nav>
          <Link href="/">home</Link>
        </nav>
      </header>
      <main className="p-12">{children}</main>
    </body>
  );
}
