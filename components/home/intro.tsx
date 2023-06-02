import Link from "next/link";
import HomeAnimation from "./animation";
import { useEffect, useState } from "react";

export default function Intro() {
  const [showTitle, setShowTitle] = useState(false);
  const [showP, setShowP] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowTitle(true);
    }, 1000);
    setTimeout(() => {
      setShowP(true);
    }, 2000);
    setTimeout(() => {
      setShowButton(true);
    }, 3000);
  }, []);

  const titleStyles = {
    opacity: showTitle ? 1 : 0,
    transform: `translateY(${showTitle ? 0 : "20px"})`,
    transition: "opacity 1s ease-in-out, transform 1s ease-in-out",
  };
  const pStyles = {
    opacity: showP ? 1 : 0,
    transform: `translateY(${showP ? 0 : "20px"})`,
    transition: "opacity 1s ease-in-out, transform 1s ease-in-out",
  };

  const buttonStyles = {
    opacity: showButton ? 1 : 0,
    transform: `translateY(${showButton ? 0 : "20px"})`,
    transition: "opacity 1s ease-in-out, transform 1s ease-in-out",
  };

  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1
          style={titleStyles}
          className="custom-leading text-4xl mb-10 title-font font-medium text-gray-900"
        >
          두려움을 극복하며 절대로 포기하지 않는
          <br className="hidden lg:inline-block" />
          프론트엔드 개발자, 엄성준입니다.
        </h1>
        <p style={pStyles} className="leading-10 mb-10">
          - 개발자로서, 사람들이 사용하는 웹 사이트의 UX에 관심이 많고, 그런
          소프트웨어를 개발하고자 합니다.
          <br />
          - 단순히 현재의 이익만을 추구하는 것이 아니라, 보다 의미 있는 목표와
          비전에 집중하는 것이 중요하다고 생각합니다.
          <br />
          - 한 번 시작한 일은 결코 중도에 포기하지 않고 최선을 다하여 끝까지
          이루어 냅니다.
          <br />
          - 만약 부족한 점이 발견된다면, 그 부분을 개선하기 위해 노력합니다.
          <br />- 어떤 환경에서든 적응력이 뛰어나며, 어려움을 극복하며 잘
          적응합니다.
        </p>
        <div className="flex justify-center">
          <Link
            style={buttonStyles}
            href="/projects"
            className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 hover:text-white rounded text-lg"
          >
            프로젝트 보러가기
          </Link>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <HomeAnimation />
      </div>
    </>
  );
}
