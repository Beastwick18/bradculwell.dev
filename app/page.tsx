import AboutMe from "@/components/aboutme";
import MainPage from "@/components/mainpage";

export default function Home() {
  return (
    <main className="">
      <MainPage />
      <div className="relative z-10">
        <AboutMe />
      </div>
    </main>
  )
}
