import Lnk from "@/components/lnk";
import { FaRegStar, FaRust, FaStar } from "react-icons/fa";
import { RiGitRepositoryLine } from "react-icons/ri";
import Repo, { Lang } from "./repo";
import { SiCplusplus, SiGo, SiPython, SiRust } from "react-icons/si";

const AboutMe = () => {
  const cpp: Lang = {
    name: "C++",
    LangIcon: SiCplusplus,
    lang_color: "magenta"
  }
  const rust: Lang = {
    name: "Rust",
    LangIcon: SiRust,
    lang_color: "orange"
  }
  const python: Lang = {
    name: "Python",
    LangIcon: SiPython,
    lang_color: "cyan"
  }
  const go: Lang = {
    name: "Go",
    LangIcon: SiGo,
    lang_color: "cyan"
  }
  return (
    <div className="w-lvw lg:h-lvh overflow-hidden flex flex-col">
      <div className="absolute w-lvw lg:h-lvh flex">
        <div className="w-1/3 h-lvh max-lg:h-full max-lg:w-0">
          <div style={{ backgroundImage: "url(https://github.com/Beastwick18/nyaa/raw/main/assets/tty.gif)" }} className="absolute w-full h-full max-lg:hidden bg-center bg-cover -z-10"></div>
          <div className="lg:bg-gradient-to-l lg:from-neutral-900 lg:to-transparent lg:from-65% w-full h-full max-lg:bg-neutral-900 lg:w-lvw lg:h-lvh absolute -z-10"></div>
        </div>
        <div className="lg:h-lvh w-2/3 max-lg:w-full bg-transparent flex flex-col items-center">
          <div className="w-3/4 h-full pt-12 flex flex-col gap-8">
            <div className="w-fit h-fit">
              <h1 id="about-me" className="text-4xl">About Me</h1>
              <span className="bg-red-500 w-full h-1 block"></span>
            </div>
            <div className="lg:overflow-scroll flex flex-col gap-8 text-2xl leading-9 lg:text-justify">
              <p>
                I'm Brad Culwell, a dedicated student currently enrolled at The University of Texas at Arlington.
                I'm a Computer Science major who primarily works with languages like C, C++, Python, Rust, and Go, complemented by expertise in front-end technologies such as HTML, CSS, and JavaScript.
              </p>
              <p>
                Some tools I often use include NeoVim, VSCode, Docker, and Git.
                I have contributed to open-source projects on GitHub, showcasing a collaborative spirit and commitment to programming.
                With a deep understanding of both Linux and Windows environments, I am poised to make meaningful contributions to the dynamic field of technology.
                Connect with me on <Lnk href="https://www.linkedin.com/in/steven-culwell-5b92b3239/">LinkedIn</Lnk> or explore my projects on <Lnk href="https://beastwick18.github.io">GitHub</Lnk>.
              </p>
            </div>
            <div className="w-fit h-fit">
              <h1 id="about-me" className="text-4xl">Projects</h1>
              <span className="bg-lime-500 w-full h-1 block"></span>
            </div>
            <div className="lg:overflow-scroll grid grid-cols-1 lg:grid-cols-2 gap-4 text-2xl leading-9 text-neutral-400 items-center min-h-[200px] pb-4">
              <Repo
                url="Beastwick18/nyaa"
                desc="A nyaa.si tui tool for browsing and downloading torrents"
                lang={rust}
                stars={8}
              />
              <Repo
                url="Beastwick18/gltest"
                desc="A minecraft-like voxel game"
                lang={cpp}
                stars={2}
              />
              <Repo
                url="Beastwick18/kitty-background-manager"
                desc="A cli program for managing backgrounds in kitty terminal"
                lang={python}
                stars={3}
              />
              <Repo
                url="Beastwick18/genshin-real-time-notes"
                desc="📝 View your Genshin and Honkai: Star Rail Real-Time Notes from your PC! Check your resin and stamina without opening the Hoyolab App."
                lang={go}
                stars={3}
              />

              {/* <div className="text-lg bg-neutral-800 w-full max-w-[800px] p-4 rounded-2xl flex gap-1"> */}
              {/*   <div className="w-full"> */}
              {/*     <div className="flex items-center w-fit gap-2"> */}
              {/*       <RiGitRepositoryLine size={25} /> */}
              {/*       <Lnk href="https://github.com/Beastwick18/nyaa">nyaa</Lnk> */}
              {/*     </div> */}
              {/*     <p className="line-clamp-2"></p> */}
              {/*     <div className="flex items-center gap-2"> */}
              {/*       <FaRust color="orange" /> */}
              {/*       <p>Rust</p> */}
              {/*     </div> */}
              {/*   </div> */}
              {/*   <Lnk href="https://github.com/Beastwick18/nyaa"> */}
              {/*     <FaRegStar className="hover:text-yellow-500" size={25} /> */}
              {/*   </Lnk> */}
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default AboutMe;
