import Menu from "./Menu";
import Card from "./Card";
import Presentation from "./presentation";
export default function Home() {
  return (
    <main className="flex flex-col bg-zinc-900/50 backdrop-blur max-sm:w-[20rem] lg:w-[60rem] h-[35rem] rounded-[1rem] 2xl:scale-125 2xl:mt-[3rem]">
      <div className="mt-[2rem] mx-[3rem]"><Menu/></div>
      <div className="flex justify-between mx-12">
      <Presentation/>
      <Card/>
      </div>
    </main>
  )
}
