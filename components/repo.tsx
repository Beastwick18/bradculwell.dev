"use client";

import { FaRegStar } from "react-icons/fa"
import { RiGitRepositoryLine } from "react-icons/ri"
import Link from "next/link"
import * as Icons from "react-icons/si"
import { CgTerminal } from "react-icons/cg"
import useSWR, { Fetcher } from "swr";
import { IconType } from "react-icons";
import Loading from "./loading"
import { twMerge } from "tailwind-merge";
import { BiErrorAlt } from "react-icons/bi";

export type Lang = {
  icon_name: string
  lang_color: string
}

type RepoParams = {
  url: string
  className?: string
}

const languages: { [name: string]: Lang } = {
  "C++": {
    icon_name: "SiCplusplus",
    lang_color: "magenta"
  },
  "Rust": {
    icon_name: "SiRust",
    lang_color: "orange"
  },
  "Python": {
    icon_name: "SiPython",
    lang_color: "cyan"
  },
  "Go": {
    icon_name: "SiGo",
    lang_color: "cyan"
  },
  "Unknown": {
    icon_name: "SiWindowsterminal",
    lang_color: "white"
  }
}

const SiIcon = (name: string) => {
  const SiIcons = Icons as { [id: string]: IconType }
  const IconComponent: any = SiIcons[name]
  if (SiIcons) {
    return IconComponent
  }
  return CgTerminal;
}

const fetcher: Fetcher<any> = (input: string | URL | Request, init?: RequestInit<CfProperties<unknown>> | undefined) => fetch(input, init).then(res => res.json())

const Repo: React.FC<RepoParams> = ({ url, className }) => {
  const { data, error, isLoading } = useSWR(`https://api.github.com/repos/${url}`, fetcher)
  const full_link = `https://github.com/${url}`
  if (isLoading) {
    return (
      <Link className="w-full flex justify-center items-center bg h-[149px] bg-transparent rounded-2xl" href={full_link}>
        <Loading className="w-1/4 h-1/4" />
      </Link>
    )
  }
  if (error || data == undefined) {
    return (
      <Link className="w-full h-[149px] bg-neutral-800 text-xl p-8 rounded-2xl flex flex-row justify-center items-center gap-2" href={full_link}>
        <BiErrorAlt size={40} className="text-red-500" />
        <p>There was an error loading the repository</p>
      </Link>
    )
  }
  const name = data["full_name"] ?? "Can't find repo :("
  const desc = data["description"] ?? "Can't find description :("
  const stars = data["stargazers_count"] ?? 0
  const language = data["language"] ?? "Unknown"
  const lang = languages[language] ?? languages["Unknown"]
  const Icon = SiIcon(lang.icon_name)
  return (
    <div className={twMerge("text-lg bg-neutral-800 w-full p-4 rounded-2xl grid-rows-[auto_1fr_auto] grid gap-2 h-full border-solid border-2 border-white/10 shadow-lg shadow-neutral-950", className)}>
      <div className="grid grid-cols-[1fr_auto]">
        <div className="flex items-center gap-2 truncate">
          <RiGitRepositoryLine size={25} />
          <Link className="text-cyan-500 hover:underline truncate" href={full_link}>{name}</Link>
        </div>
        <Link href={full_link} className="hover:text-yellow-500 flex justify-center gap-1 justify-items-end" >
          <FaRegStar size={25} />
          <p>{stars}</p>
        </Link>
      </div>
      <p className="line-clamp-2 leading-tight">{desc}</p>
      <div className="flex items-center gap-2">
        <Icon color={lang.lang_color} />
        <p>{language}</p>
      </div>
    </div>
  )
}

export default Repo
