import Repos from "./repos";
import Paragraph from "./paragraph";

const AboutMe = () => {
  return (
    <div id="about-me" className="w-lvw lg:h-lvh flex flex-col relative z-10">
      <div className="absolute w-lvw lg:h-lvh flex">
        <div className="w-1/3 h-lvh max-lg:h-full max-lg:w-0">
          <div style={{ backgroundImage: "url(tty.gif)" }} className="absolute w-full h-full max-lg:hidden bg-center bg-cover -z-10"></div>
          <div className="lg:bg-gradient-to-l lg:from-neutral-900 lg:to-transparent lg:from-65% w-full h-full max-lg:bg-neutral-900 lg:w-lvw lg:h-lvh absolute -z-10"></div>
        </div>
        <div className="lg:h-lvh w-2/3 max-lg:w-full bg-transparent flex flex-col items-center">
          <div className="w-full lg:h-lvh max-lg:p-8 pt-6 lg:grid lg:grid-rows-2 max-lg:flex max-lg:flex-col gap-6">
            <div className="flex gap-6 flex-col">
              <div className="lg:mx-[8.3333lvw] w-fit h-fit">
                <h1 className="text-4xl">About Me</h1>
                <span className="bg-red-500 w-full h-1 block"></span>
              </div>
              <Paragraph />
            </div>
            <div className="flex gap-6 flex-col">
              <div className="lg:mx-[8.3333lvw] w-fit h-fit">
                <h1 id="about-me" className="text-4xl">Projects</h1>
                <span className="bg-lime-500 w-full h-1 block"></span>
              </div>
              <Repos />
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default AboutMe;
