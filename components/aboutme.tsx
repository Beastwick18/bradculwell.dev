import Lnk from "@/components/lnk";
import Repo from "./repo";
import Repos from "./repos";

const AboutMe = () => {
  return (
    <div id="about-me" className="w-lvw lg:h-lvh overflow-hidden flex flex-col">
      <div className="absolute w-lvw lg:h-lvh flex">
        <div className="w-1/3 h-lvh max-lg:h-full max-lg:w-0">
          <div style={{ backgroundImage: "url(tty.gif)" }} className="absolute w-full h-full max-lg:hidden bg-center bg-cover -z-10"></div>
          <div className="lg:bg-gradient-to-l lg:from-neutral-900 lg:to-transparent lg:from-65% w-full h-full max-lg:bg-neutral-900 lg:w-lvw lg:h-lvh absolute -z-10"></div>
        </div>
        <div className="lg:h-lvh w-2/3 max-lg:w-full bg-transparent flex flex-col items-center">
          <div className="w-full lg:h-lvh max-lg:p-8 pt-12 flex flex-col gap-8">
            <div className="lg:px-[8.3333lvw] w-fit h-fit">
              <h1 className="text-4xl">About Me</h1>
              <span className="bg-red-500 w-full h-1 block"></span>
            </div>
            <div className="lg:px-[8.3333lvw] lg:overflow-scroll flex flex-col gap-8 text-2xl leading-9 lg:text-justify">
              <p>
                I&apos;m Brad Culwell, a dedicated student currently enrolled at The University of Texas at Arlington.
                I&apos;m a Computer Science major who primarily works with languages like C, C++, Python, Rust, and Go, complemented by expertise in front-end technologies such as HTML, CSS, and JavaScript.
              </p>
              <p>
                Some tools I often use include NeoVim, VSCode, Docker, and Git.
                I have contributed to open-source projects on GitHub, showcasing a collaborative spirit and commitment to programming.
                With a deep understanding of both Linux and Windows environments, I am poised to make meaningful contributions to the dynamic field of technology.
                Connect with me on <Lnk href="https://www.linkedin.com/in/steven-culwell-5b92b3239/">LinkedIn</Lnk> or explore my projects on <Lnk href="https://beastwick18.github.io">GitHub</Lnk>.
              </p>
            </div>
            <div className="lg:px-[8.3333lvw] w-fit h-fit">
              <h1 id="about-me" className="text-4xl">Projects</h1>
              <span className="bg-lime-500 w-full h-1 block"></span>
            </div>
            <Repos />
          </div>
        </div>
      </div>
    </div >
  )
}

export default AboutMe;
