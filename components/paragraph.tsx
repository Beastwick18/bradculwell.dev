"use client"

import { useEffect, useRef, useState } from "react";
import Lnk from "./lnk"
import { twMerge } from "tailwind-merge";
import { useInView } from "framer-motion";

const Paragraph = () => {
  const ref = useRef(null)
  const isVisible = useInView(ref);
  const [animate, setAnimate] = useState("")
  useEffect(() => {
    if (isVisible) {
      setAnimate("animate-fade-left")
    } else {
      setAnimate("")
    }
  }, [isVisible])
  return (
    <div ref={ref} className="lg:px-[8.3333lvw] lg:overflow-y-scroll flex flex-col gap-6 text-2xl leading-9 lg:text-justify">
      <p className={twMerge("animate-delay-100", animate)}>
        I&apos;m Brad Culwell, a dedicated student currently enrolled at The University of Texas at Arlington.
        I&apos;m a Computer Science major who primarily works with languages like C, C++, Python, Rust, and Go, complemented by expertise in front-end technologies such as HTML, CSS, and JavaScript.
      </p>
      <p className={twMerge("animate-delay-200", animate)}>
        Some tools I often use include NeoVim, VSCode, Docker, and Git.
        I have contributed to open-source projects on GitHub, showcasing a collaborative spirit and commitment to programming.
        With a deep understanding of both Linux and Windows environments, I am poised to make meaningful contributions to the dynamic field of technology.
        Connect with me on <Lnk href="https://www.linkedin.com/in/steven-culwell-5b92b3239/">LinkedIn</Lnk> or explore my projects on <Lnk href="https://beastwick18.github.io">GitHub</Lnk>.
      </p>
    </div>
  )
}

export default Paragraph
