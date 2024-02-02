const Projects = () => {
  return (
    <div className="w-lvw md:h-lvh overflow-hidden flex flex-col">
      <div className="absolute w-lvw md:h-lvh flex">
        <div className="md:h-lvh w-2/3 max-md:w-full bg-black flex flex-col items-center ">
          <div className="w-3/4 h-full py-5 flex flex-col gap-8">
            <div className="w-fit h-fit">
              <h1 id="about-me" className="text-7xl">Projects</h1>
              <span className="bg-cyan-500 w-full h-1 block"></span>
            </div>
            <div className="md:overflow-scroll flex flex-col gap-8 text-2xl leading-9 text-justify">
              <p>
                I'm Steven Culwell, a student currently enrolled at The University of Texas at Arlington.
                My focus lies in the realm of technology and programming, where my commitment to excellence and continuous learning propels my journey.
                As a dedicated student, I find immense satisfaction in navigating the challenges posed by various programming languages and academic endeavors.
              </p>
              <p>
                Within the sphere of programming languages, I have cultivated proficiency in Python, C, C++, Rust, and JavaScript, to name a few.
                Beyond these, my competencies extend to encompass front-end technologies such as HTML, CSS, and JavaScript.
                My utilization of development tools including Vim, VSCode, Docker, Git, and others reflects a strategic approach to software engineering, ensuring precision and efficiency in my work.
              </p>
              <p>
                In addition to my academic pursuits, I actively contribute to open-source projects on GitHub, demonstrating a commitment to the collaborative nature of the field.
                My adeptness in navigating both Linux and Windows environments underscores a comprehensive understanding of operating systems.
                If you are interested in exploring my professional profile further or delving into my coding endeavors, feel free to connect with me on LinkedIn or explore my projects on GitHub.
                I am eager to engage with like-minded professionals and contribute meaningfully to the dynamic landscape of technology.
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/3 h-lvh max-md:hidden">
          <div style={{ backgroundImage: "url(minecraft.png)" }} className="absolute w-1/3 h-lvh bg-center bg-cover"></div>
          <div className="bg-gradient-to-l from-black to-black/25 w-1/3 h-lvh absolute"></div>
        </div>
      </div>
    </div>
  )
}

export default Projects;
