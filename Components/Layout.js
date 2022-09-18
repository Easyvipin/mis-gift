import Head from "next/head";
import Link from "next/link";
import React from "react";

export const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title ? title + "- misGift" : "misGift"}</title>
        <meta name="description" content="Gifts for you!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex h-12 justify-between shadow-md items-center px-4">
            <Link href="/">
              <a className="text-lg font-bold">misGift</a>
            </Link>
            <div>
              <Link href="/cart">
                <a className="p-2">Cart</a>
              </Link>
              <Link href="/login">
                <a className="p-2">Login</a>
              </Link>
            </div>
          </nav>
        </header>
        <main className="container mt-4 px-4 m-auto">{children}</main>
        <footer className="flex h-10 justify-center items-center shadow-inner ">
          missGift 2022
        </footer>
      </div>
    </>
  );
};
