/* eslint-disable react/no-unescaped-entities */
import Layout from "@/components/layout";
import type { InferGetStaticPropsType, GetStaticProps } from "next";
import { DATABASE_ID, TOKEN } from "@/config";
import Head from "next/head";
import ProjectItem from "@/components/projects/projectItem";
import { Repo } from "@/types/types";
import HomeAnimation from "@/components/home/reactAnimation";
import CodingAnimation from "@/components/projects/codingAnimation";

export const getStaticProps: GetStaticProps<{
  repo: Repo;
}> = async () => {
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "Notion-Version": "2022-02-22",
      "content-type": "application/json",
      authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      page_size: 100,
    }),
  };
  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options
  );
  const repo = await res.json();
  return { props: { repo } };
};

export default function Projects({
  repo,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  // console.log(repo);
  const projects = [...repo.results];

  projects.sort((a, b) => {
    const startA = new Date(a.properties["진행 기간"].date.start).getTime();
    const startB = new Date(b.properties["진행 기간"].date.start).getTime();
    return startA - startB;
  });

  return (
    <Layout>
      <Head>
        <title>SungJun's portfolio-Projects</title>
        <meta
          name="description"
          content="엄성준의 NextJs를 활용한 포트폴리오 입니다."
        />
      </Head>
      {/* <h1>총 프로젝트 : {projects.length}</h1> */}
      <section className="flex min-h-screen flex-column items-center justify-center text-gray-600 body-font">
        <div className="container flex-column mx-auto flex px-5 py-24 flex-col items-center">
          <div className="flex md:flex-row sm:flex-row flex-wrap">
            {projects.map((project) => {
              return <ProjectItem key={project.id} project={project} />;
            })}
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <CodingAnimation />
          </div>
        </div>
      </section>
    </Layout>
  );
}
