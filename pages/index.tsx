/* eslint-disable react/no-unescaped-entities */
import HomeAnimation from "@/components/home/animation";
import Intro from "@/components/home/intro";
import Layout from "@/components/layout";
import Head from "next/head";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>SungJun's portfolio-Home</title>
        <meta
          name="description"
          content="엄성준의 NextJs를 활용한 포트폴리오 입니다."
        />
      </Head>
      <section className="flex min-h-screen flex-column items-center justify-center text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <Intro />
        </div>
      </section>
    </Layout>
  );
}
