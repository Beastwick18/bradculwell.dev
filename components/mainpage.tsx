import Image from "next/image"
import Link from "next/link"
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa"
import { GoChevronDown } from "react-icons/go"

const MainPage = () => {
  return (
    <div className="w-lvw h-lvh">
      <div className="fixed w-lvw h-lvh top-0 left-0">
        <div className="fixed top-0 left-0 w-lvw h-lvh">
          <div style={{ backgroundImage: "url(minecraft.png)" }} className="w-lvw h-lvh bg-center bg-cover opacity-75"></div>
        </div>
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex md:flex-row text-center md:text-left flex-col gap-6 w-full items-center justify-center">
          <Link href="https://github.com/Beastwick18" className="rounded-full overflow-hidden w-fit h-full border-white/20 border">
            <Image alt="Profile Picture" src="https://github.com/beastwick18.png?size=200" width={200} height={200} />
          </Link>
          <div className="w-fit gap-2 flex flex-col font-light text-shadow">
            <p className="md:text-7xl text-5xl">Brad Culwell</p>
            <div className="md:text-3xl text-xl">
              <p>Computer Science Major</p>
              <p>University of Texas at Arlington</p>
            </div>
            <div className="flex flex-row gap-2 md:justify-start justify-center">
              <Link href="https://github.com/Beastwick18">
                <FaGithub size={40} />
              </Link>
              <Link href="mailto:bradculwell@pm.me">
                <FaEnvelope size={40} />
              </Link>
              <Link href="https://www.linkedin.com/in/steven-culwell-5b92b3239/">
                <FaLinkedin size={40} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Link href="#about-me" className="fixed bottom-0 left-1/2 -translate-x-1/2">
        <GoChevronDown size={60} className="animate-bounce" />
      </Link>
    </div>
  )
}

export default MainPage
