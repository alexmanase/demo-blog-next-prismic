import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { Client } from "../../prismic/prismic";

import { RichText } from "prismic-reactjs";
import { htmlSerializer } from "../../prismic/htmlSerializer";
import Container from "../../components/Container";
import Link from "next/link";

// const linkResolver = (doc: any) => {
//   // Pretty URLs for known types
//   if (doc.type === "blog") return "/post/" + doc.uid;
//   if (doc.type === "page") return "/" + doc.uid;
//   // Fallback for other types, in case new custom types get created
//   return "/doc/" + doc.id;
// };

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export async function getStaticProps(context: any) {
  const document = await Client.getByUID("blog-post", context.params.slug, {});
  return {
    props: {
      document,
    },
  };
}

const Home: NextPage = ({ document }: any) => {
  console.log(document);
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="p-4 shadow-md mb-6">
        <Link href="/blog">
          <a>
            <h1 className="text-center font-bold text-2xl">Welhome Blog</h1>
          </a>
        </Link>
      </header>
      <main>
        <Container>
          <div className="prose">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={document?.data.image.url}
              alt={document?.data.image.alt}
              className="rounded-md"
            />
            <h1>{document?.data.title[0].text}</h1>

            {document && (
              <RichText
                render={document.data.body[0].primary.text}
                htmlSerializer={htmlSerializer}
              />
            )}
          </div>
        </Container>
      </main>
    </div>
  );
};

export default Home;
