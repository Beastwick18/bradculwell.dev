import Link from "next/link"
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa"

const MainPage = () => {
  return (
    <>
      <div className="fixed top-0 left-0 w-lvw h-lvh">
        <div style={{ backgroundImage: "url(minecraft.png)" }} className="w-lvw h-lvh bg-center bg-cover opacity-75"></div>
      </div>
      <div className="fixed top-0 left-0 w-full h-[100px] flex text-3xl font-[150] text-center justify-center bg-gradient-to-b from-black/60 to-transparent">
        {/* <Link href="test" className="w-40 h-fit">Test</Link> */}
        {/* <Link href="test" className="w-40">Test</Link> */}
        {/* <Link href="test" className="w-40 h-fit border-b text-center">Test</Link> */}
      </div>
      <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex md:flex-row text-center md:text-left flex-col gap-6 w-full items-center justify-center">
        <Link href="https://github.com/Beastwick18" className="rounded-full overflow-hidden w-fit h-full border-white/20 border">
          <img src="https://github.com/beastwick18.png?size=200" />
        </Link>
        <div style={{ textShadow: "black 0px 0 6px" }} className="w-fit gap-2 flex flex-col font-[150]">
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
    </>
  )
}

export default MainPage
