import { IconType } from "react-icons"
import { CgTerminal } from "react-icons/cg"
import * as Icons from "react-icons/si"

export type Lang = {
  icon_name: string
  lang_color: string
}

export const languages: { [name: string]: Lang } = {
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

export const SiIcon = (name: string) => {
  const SiIcons = Icons as { [id: string]: IconType }
  const IconComponent: any = SiIcons[name]
  if (SiIcons) {
    return IconComponent
  }
  return CgTerminal;
}
