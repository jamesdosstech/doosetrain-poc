import React from "react";
import Head from "next/head";
import Link from "next/link";

function Layout({ children }) {
  return (
    <>
      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex h-12 items-center px-4 justify-between shadow-md">
            <Link href={"/"}>
              <p className="text-lg font-bold">Doosetrain</p>
            </Link>
            <div className="flex items-center z-10">
              <Link href={"/cart"}>
                <p className="p-2">Cart</p>
              </Link>
              <Link href={"/login"}>
                <p className="p-2">Login</p>
              </Link>
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="flex justify-center items-center h-10 shadow-inner">
          footer
        </footer>
      </div>
    </>
  );
}

export default Layout;
