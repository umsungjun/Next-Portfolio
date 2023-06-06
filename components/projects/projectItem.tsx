import { ProjectItem } from "@/types/types";
import Image from "next/image";
import { SiNotion } from "react-icons/si";

export default function ProjectItem({
  project: { cover, properties, url },
}: ProjectItem) {
  const title = properties["이름"]?.title[0]?.text?.content ?? "";
  const explain = properties["주제"]?.rich_text[0]?.plain_text ?? "";
  const coverImg = cover.file.url;
  const start = properties["진행 기간"]?.date?.start ?? "";
  const end = properties["진행 기간"]?.date?.end ?? "";
  const frontTag =
    properties["기술 스택 (Front)"]?.rich_text[0]?.plain_text ?? "";
  const backTag =
    properties["기술 스택 (Back)"]?.rich_text[0]?.plain_text ?? "";
  const notionUrl = url;
  const gitUrl = properties["깃허브 링크"]?.url ?? "";
  const youtubeUrl = properties["작동 영상"]?.url ?? "";
  const vercelLink = properties["배포 링크"]?.url ?? "";

  const fTag = frontTag.split(" ") as string[];
  const bTag = backTag.split(" ") as string[];
  const tags =
    bTag.length === 1 ? fTag : [...fTag, ...bTag].map((tag) => tag.trim());

  return (
    <div className="project-card ">
      <Image
        className="rounded-t-xl"
        src={coverImg}
        alt="cover image"
        width={100}
        height={100}
        layout="responsive"
        objectFit="cover"
        quality={100}
      />

      <div className="p-4 flex flex-col">
        <h1 className="text-2xl font-bold">{title}</h1>
        <h3 className="mt-4 text-xl mb-2">{explain}</h3>
        <a
          className="flex items-center  hover:text-blue-700 mb-2"
          href={notionUrl}
        >
          <SiNotion className="mr-1" />
          노션 - 노션을 통해 프로젝트 정보를 간편하게 확인할 수 있습니다.
        </a>
        <a
          className="flex items-center mr-1 hover:text-blue-700 mb-2"
          href={gitUrl}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-github mr-1"
            viewBox="0 0 16 16"
          >
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
          </svg>
          깃허브 - 깃허브를 통해 프로젝트 정보를 간편하게 확인할 수 있습니다.
        </a>
        {youtubeUrl !== "" ? (
          <a
            href={youtubeUrl}
            className="flex items-center hover:text-blue-700 mb-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-youtube mr-1"
              viewBox="0 0 16 16"
            >
              <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
            </svg>
            시연영상 바로가기
          </a>
        ) : null}
        {vercelLink !== "작동영상으로 대체" ? (
          <a
            href={vercelLink}
            className="flex items-center hover:text-blue-700 mb-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-globe mr-1"
              viewBox="0 0 16 16"
            >
              <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" />
            </svg>
            배포사이트 바로가기
          </a>
        ) : null}
        <p className="my-1 ">
          작업기간 : {start} ~ {end}
        </p>
        <div className="flex items-start mt-2 flex-wrap">
          {tags.map((aTag, i) => (
            <h1
              className="px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30 mb-2"
              key={`${aTag}+${i}`}
            >
              {aTag}
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
}
