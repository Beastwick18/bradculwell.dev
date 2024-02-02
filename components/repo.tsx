import { FaRegStar } from "react-icons/fa"
import Lnk from "./lnk"
import { RiGitRepositoryLine } from "react-icons/ri"
import { IconType } from "react-icons"
import Link from "next/link"

export type Lang = {
  LangIcon: IconType
  name: string
  lang_color: string
}

type RepoParams = {
  url: string
  desc: string
  lang: Lang
  stars: number
}


const Repo: React.FC<RepoParams> = ({ url, desc, lang, stars }) => {
  const full_link = `https://github.com/${url}`
  return (
    <div className="text-lg bg-neutral-800 w-full p-4 rounded-2xl grid-rows-[auto_1fr_auto] grid gap-2 h-full">
      <div className="grid grid-cols-[1fr_auto]">
        <div className="flex items-center gap-2 truncate">
          <RiGitRepositoryLine size={25} />
          <Link className="text-cyan-500 hover:underline truncate" href={full_link}>{url}</Link>
        </div>
        <Link href={full_link} className="hover:text-yellow-500 flex justify-center gap-1 justify-items-end" >
          <FaRegStar size={25} />
          <p>{stars}</p>
        </Link>
      </div>
      <p className="line-clamp-2 leading-tight">{desc}</p>
      <div className="flex items-center gap-2">
        <lang.LangIcon color={lang.lang_color} />
        <p>{lang.name}</p>
      </div>
    </div>
  )
}

export default Repo
