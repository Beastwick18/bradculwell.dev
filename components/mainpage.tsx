import Link from "next/link"
import Background from "./bg"
import { GoChevronDown } from "react-icons/go"

const MainPage = () => {
  return (
    <div className="w-lvw h-lvh">
      <div className="fixed w-lvw h-lvh top-0 left-0">
        <Background />
      </div>
      <Link draggable={false} href="#about-me" className="fixed flex justify-center w-full md:h-1/4 pt-6 h-fit items-end bottom-0 left-0">
        <GoChevronDown size={60} className="animate-bounce" />
      </Link>
    </div>
  )
}

export default MainPage
