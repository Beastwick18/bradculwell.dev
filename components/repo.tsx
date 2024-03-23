"use client";

import { FaDownload, FaRegStar } from "react-icons/fa"
import { RiGitRepositoryLine } from "react-icons/ri"
import Link from "next/link"
import useSWR, { Fetcher } from "swr";
import Loading from "./loading"
import { twMerge } from "tailwind-merge";
import { BiErrorAlt } from "react-icons/bi";
import { SiIcon, languages } from "@/data/repo";

type RepoParams = {
  url: string
  showDownloads?: boolean
  className?: string
}

const fetcher: Fetcher<any> = (input: string | URL | Request, init?: RequestInit<CfProperties<unknown>> | undefined) => fetch(input, init).then(res => res.json())

const Repo: React.FC<RepoParams> = ({ url, showDownloads, className }) => {
  const { data, error, isLoading } = useSWR(`https://api.github.com/repos/${url}`, fetcher)
  const { data: rData, error: rError, isLoading: rLoading } = useSWR(`https://api.github.com/repos/${url}/releases`, fetcher)
  const full_link = `https://github.com/${url}`
  if (isLoading || rLoading) {
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
  const owner = data["owner"]?.["login"] ?? ""
  const name = data["name"] ?? "Can't find repo :("
  const desc = data["description"] ?? "Can't find description :("
  const stars = data["stargazers_count"] ?? 0
  const language = data["language"] ?? "Unknown"
  const lang = languages[language] ?? languages["Unknown"]
  const Icon = SiIcon(lang.icon_name)
  const release = (rData[0] && rData[0]["tag_name"]) ?? ""
  let sum = 0;
  if (Symbol.iterator in Object(rData) && showDownloads) {
    for (const e of rData)
      if (e["assets"] && Symbol.iterator in Object(e["assets"]))
        for (const a of e["assets"])
          sum += a["download_count"] ?? 0
  }
  return (
    <Link href={full_link} className={twMerge("text-lg group bg-neutral-800 w-full p-4 rounded-2xl grid-rows-[auto_1fr_auto] grid gap-2 h-full border-solid border-2 border-white/10 shadow-lg shadow-neutral-950", className)}>
      <div className="grid grid-cols-[1fr_auto]">
        <div className="flex items-center gap-2 truncate">
          <RiGitRepositoryLine size={25} />
          <div className="text-cyan-500 group-hover:underline truncate leading-tight">
            <span className="max-lg:hidden w-fit">{owner}/</span>{name}
          </div>
        </div>
        <div className="flex justify-center gap-1 justify-items-end" >
          <div className="hover:text-yellow-500 flex items-center gap-1"><FaRegStar size={25} />{stars}</div>
        </div>
      </div>
      <p className="line-clamp-2 leading-tight">{desc}</p>
      <div className="flex">
        <div className="w-full flex items-center gap-2">
          <Icon color={lang.lang_color} />
          <p>{language}</p>
        </div>
        <div className="flex items-center gap-2">
          {
            showDownloads &&
            <div className="flex gap-1 items-center">
              <FaDownload />
              <p title="Total Downloads">{sum}</p>
            </div>
          }
          <p>{release}</p>
        </div>

      </div>
    </Link >
  )
}

export default Repo
