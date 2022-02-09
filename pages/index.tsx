import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import Prismic from "@prismicio/client";
import { Client } from "../prismic/prismic";
import Link from "next/link";

export async function getStaticProps() {
  const { results } = await Client.query(
    Prismic.Predicates.at("document.type", "blog-post")
  );

  return {
    props: {
      blogPosts: results,
    },
  };
}

const Home: NextPage = ({ blogPosts }: any) => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{ padding: "30px" }}>
        <h1>Blog demo</h1>
        {blogPosts.map((post: any) => {
          return (
            <Link href={`/blog/${post.slugs[0]}`} key={post.id}>
              <a>
                <div className="card">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={post.data.image.url}
                    alt={post.data.image.alt}
                    width="100%"
                  />
                  <h2>{post.data.title[0].text}</h2>
                </div>
              </a>
            </Link>
          );
        })}
      </main>
    </div>
  );
};

export default Home;