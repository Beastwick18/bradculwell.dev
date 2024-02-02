import { ReactNode } from "react"

type LinkParams = {
  href: string,
  children: ReactNode
}
const Lnk: React.FC<LinkParams> = ({ href, children }) => {
  return (
    <a className="hover:underline text-cyan-500 hover:text-cyan-400" href={href}>{children}</a>
  )
}

export default Lnk
