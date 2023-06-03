import React, { Component } from "react";
import Header from "./header";
import Footer from "./footer";

export default function Layout({ children }: any) {
  return (
    <section className="bg-primary">
      <Header />
      <div>{children}</div>
      <Footer />
    </section>
  );
}
