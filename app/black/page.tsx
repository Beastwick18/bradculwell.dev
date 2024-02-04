"use client"

import { useState } from "react"
import { twMerge } from "tailwind-merge"

const Black = () => {
  const [isFullscreen, setFullscreen] = useState(false)
  const [timer, setTimer] = useState<null | NodeJS.Timeout>(null)
  const [mouse, setMouse] = useState("")

  const toggleFullscreen = () => {
    if (isFullscreen) {
      document.exitFullscreen()
    } else {
      document.getElementById("screen")?.requestFullscreen()
    }
    setFullscreen(!isFullscreen)
  }
  const mouseMove = () => {
    console.log("move")
    if (timer) {
      clearTimeout(timer)
      setMouse("")
    }
    setTimer(setTimeout(() => {
      setMouse("cursor-none")
    }, 1500))
  }

  return (
    <div id="screen" className={twMerge("w-lvw  h-lvh", mouse)} onDoubleClick={toggleFullscreen} onMouseMove={mouseMove}></div>
  )
}

export default Black
