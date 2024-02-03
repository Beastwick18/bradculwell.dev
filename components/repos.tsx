"use client"
import { useEffect, useRef, useState } from "react"
import Repo from "./repo"
import { useIsVisible } from "@/hooks/useIsVisible"
import { twMerge } from "tailwind-merge"

const Repos = () => {
  const ref = useRef(null)
  const isVisible = useIsVisible(ref);
  const [animate, setAnimate] = useState("")
  useEffect(() => {
    if (isVisible) {
      setAnimate("animate-fade-right")
    }
  }, [isVisible])
  return (
    <div ref={ref} className="lg:w-[66.6lvw] lg:px-[8.3333lvw] flex-col w-full lg:overflow-scroll grid grid-cols-1 lg:grid-cols-2 gap-4 text-2xl leading-9 text-neutral-400 items-center min-h-[200px] pb-4">
      <Repo url="Beastwick18/nyaa" className={twMerge("animate-delay-[.1s]", animate)} />
      <Repo url="Beastwick18/gltest" className={twMerge("animate-delay-[.2s]", animate)} />
      <Repo url="Beastwick18/kitty-background-manager" className={twMerge("animate-delay-[.3s]", animate)} />
      <Repo url="Beastwick18/genshin-real-time-notes" className={twMerge("animate-delay-[.4s]", animate)} />
    </div>
  )
}

export default Repos
