"use client"

import { useEffect, useRef, useState } from "react"
import Repo from "./repo"
import { twMerge } from "tailwind-merge"
import { useInView } from "framer-motion"

const Repos = () => {
  const show = "animate-fade-right"
  const hide = "opacity-0"

  const ref = useRef(null)
  const isVisible = useInView(ref);
  const [animate, setAnimate] = useState(hide)
  useEffect(() => {
    setAnimate(isVisible ? show : hide)
  }, [isVisible])
  return (
    <div ref={ref} className="lg:w-[66.6lvw] lg:px-[7.5lvw] flex-col w-full lg:overflow-scroll grid grid-cols-1 2xl:grid-cols-2 gap-4 text-2xl leading-9 text-neutral-400 items-center min-h-[200px] pb-4">
      <Repo url="Beastwick18/nyaa" showDownloads={true} className={twMerge("animate-delay-0", animate)} />
      <Repo url="Beastwick18/genshin-real-time-notes" className={twMerge("animate-delay-[.05s]", animate)} />
      <Repo url="Beastwick18/gltest" className={twMerge("animate-delay-[.1s]", animate)} />
      <Repo url="Beastwick18/kitty-background-manager" className={twMerge("animate-delay-[.15s]", animate)} />
    </div>
  )
}

export default Repos
