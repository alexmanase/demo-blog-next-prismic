import Link from "next/link";
import React from "react";
import { classNames } from "../utils/classNames";

interface Post {
  image: {
    url: string;
    alt: string;
  };
  excerpt: string;
  date: string;
  title: string;
}

interface CardProps {
  slug: string;
  post: Post;
  variation?: "default" | "solid" | "big";
}

export default function Card({
  slug,
  post: { image, excerpt, date, title },
  variation = "default",
}: CardProps) {
  return (
    <Link href={`/blog/${slug}`} passHref>
      <div
        style={{
          backgroundImage: variation !== "solid" ? `url(${image.url})` : "",
        }}
        className={classNames(
          "post rounded-xl bg-cover min-h-[250px] w-full cursor-pointer relative overflow-hidden",
          "hover:-translate-y-1 hover:shadow-lg transition duration-300"
        )}
      >
        <div
          className={classNames(
            "absolute flex flex-col justify-end p-3 gap-2 inset-0",
            variation === "solid"
              ? "bg-gray-100"
              : "bg-gradient-to-b from-transparent to-black/50 text-white "
          )}
        >
          <p className="text-xs">{date.replace(/-/g, "/")}</p>
          <h2 className="font-bold text-md">{title}</h2>
          {variation === "solid" && excerpt && (
            <p>{excerpt.substring(0, 110)}...</p>
          )}
        </div>
      </div>
    </Link>
  );
}
