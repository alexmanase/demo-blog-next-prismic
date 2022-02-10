import Link from "next/link";
import Breadcrumbs from "nextjs-breadcrumbs";
import React from "react";
import Container from "../components/Container";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="pb-10">
      <header className="p-4 shadow-md mb-6">
        <Link href="/" passHref>
          <svg
            className="mx-auto cursor-pointer"
            width="66"
            height="44"
            viewBox="0 0 66 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.2688 21.7112L8.92894 0.0163269H0L14.8037 31.0768L19.2688 21.7112Z"
              fill="#231F20"
            />
            <path
              d="M39.1576 12.9232L34.6963 22.2888C34.695 22.29 34.695 22.2913 34.6963 22.2938L45.0399 44L49.5013 34.6344C49.5025 34.6332 49.5025 34.6319 49.5013 34.6294L39.1576 12.9232Z"
              fill="#231F20"
            />
            <path
              d="M57.0708 0.0163269L46.7334 21.7125L51.196 31.0768L65.9997 0.0163269H57.0708Z"
              fill="#231F20"
            />
            <path
              d="M33.0017 0L16.4971 34.6305L20.9622 43.9974L37.4631 9.36937C37.4643 9.36811 37.4643 9.3656 37.4631 9.36434L33.0017 0Z"
              fill="#231F20"
            />
          </svg>
        </Link>
      </header>
      <Container className="my-6">
        <Breadcrumbs
          labelsToUppercase
          rootLabel="Acasa"
          activeItemClassName="text-black text-opacity-50 pointer-events-none"
          listClassName="flex gap-2 items-center"
          inactiveItemClassName="flex gap-2 after:content-['>']"
          transformLabel={(title) => (
            <div className="flex-shrink-0">
              {`${title[0].toUpperCase()}${title.slice(1)}`.replace(/-/g, " ")}
            </div>
          )}
        />
      </Container>
      {children}
    </div>
  );
}
