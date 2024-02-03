"use client"

import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { useRef } from "react"
import { SiGithub, SiLinkedin, SiProtonmail } from "react-icons/si"

const Background = () => {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start', 'end start']
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, -400])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -500])
  return (
    <>
      <motion.div style={{ y }} ref={container} className="will-change-transform absolute w-lvw h-lvh" transition={{ delay: 0 }}>
        <div style={{ backgroundImage: "url(minecraft.png)" }} className="w-lvw h-lvh bg-center bg-cover"></div>
      </motion.div>
      <motion.div style={{ y: y2 }} transition={{ delay: 0 }} className="will-change-transform absolute w-lvw h-lvh flex md:flex-row text-center md:text-left flex-col gap-6 items-center justify-center">
        <Link href="https://github.com/Beastwick18" className="rounded-full overflow-hidden w-fit h-fit border-white/20 border">
          <Image alt="Profile Picture" src="https://github.com/beastwick18.png?size=200" width={200} height={200} />
        </Link>
        <div className="w-fit gap-2 flex flex-col font-light text-shadow">
          <Link href="#about-me" className="md:text-7xl text-5xl">Brad Culwell</Link>
          <div className="md:text-3xl text-xl">
            <p>Computer Science Major</p>
            <p>University of Texas at Arlington</p>
          </div>
          <div className="flex flex-row gap-2 md:justify-start justify-center">
            <Link href="https://github.com/Beastwick18">
              <SiGithub size={40} />
            </Link>
            <Link href="mailto:bradculwell@pm.me">
              <SiProtonmail size={40} />
            </Link>
            <Link href="https://www.linkedin.com/in/steven-culwell-5b92b3239/">
              <SiLinkedin size={40} />
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default Background
