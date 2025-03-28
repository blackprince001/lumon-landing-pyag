import Navbar from "@/components/navbar/navbar";
import Hero from "@/features/hero";

export default function App(){
  return (
    <div className="w-full min-h-screen bg-background font-manrope ">
        <div className="mx-auto max-w-7xl px-6 lg:px-4 h-full w-full  border-x-[1.5px] border-zinc-800 ">
        <div className="w-full border-x-[1.5px] min-h-full border-neutral-800">
          <Navbar/>
          <Hero/>
          </div>
        </div>
    </div>
  )
}
