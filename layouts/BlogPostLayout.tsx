import Link from "next/link";
import React from "react";
import Container from "../components/Container";
import Layout from "./Layout";

export default function BlogPostLayout({
  children,
  posts,
}: {
  children: React.ReactNode;
  posts: any;
}) {
  return (
    <Layout>
      <Container>
        <div className="lg:grid grid-cols-3 gap-6">
          <div className="col-span-2">{children}</div>
          <div className="col-span-1 mt-10 lg:mt-0">
            <h3 className="font-bold text-xl">Te-ar putea interesa si..</h3>
            <div className="flex flex-col gap-3 mt-3">
              {posts?.map((post: any) => {
                return (
                  <Link href={`/blog/${post.uid}`} key={post.id}>
                    <a>
                      <div className="p-4 rounded-xl bg-gray-100">
                        <p className="text-xs mb-2">
                          {post.data.date.replace(/-/g, "/")}
                        </p>
                        <h4 className="text-md font-bold">
                          {post?.data.title[0].text}
                        </h4>
                      </div>
                    </a>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
}
