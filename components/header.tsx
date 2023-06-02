/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import ThemeToggleButton from "./themeToggleButton";

import { TbBrandReactNative } from "react-icons/tb";

export default function Header() {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <TbBrandReactNative size={30} color="#3b82f6" />
          <Link href="/">
            <span className="ml-3 text-xl text-black dark:text-white">
              SungJun's Portfolio
            </span>
          </Link>
        </div>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/" className="mr-5 hover:text-gray-900">
            홈
          </Link>
          <Link href="/projects" className="mr-5 hover:text-gray-900">
            프로젝트
          </Link>
          <Link
            href="https://github.com/umsungjun"
            className="mr-5 hover:text-gray-900"
          >
            깃허브
          </Link>
          <Link
            href="https://developer-sungjun.tistory.com/"
            className="mr-5 hover:text-gray-900"
          >
            블로그
          </Link>
          <Link
            href="https://open.kakao.com/o/s9inHFnf"
            className="mr-5 hover:text-gray-900"
          >
            연락하기
          </Link>
        </nav>
        <ThemeToggleButton />
      </div>
    </header>
  );
}
