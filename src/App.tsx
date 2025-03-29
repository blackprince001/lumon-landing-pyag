import Navbar from "@/components/navbar/navbar";
import Hero from "@/features/hero";
import Features from "./features/features";

export default function App(){
  return (
    <div className="w-full min-h-screen bg-background font-manrope ">
        <div className="mx-auto max-w-7xl px-6 lg:px-4 h-full w-full  border-x-[1.5px] border-neutral-800 ">
        <div className="w-full border-x-[1.5px] min-h-full border-neutral-800">
          <Navbar/>
          <Hero/>

       <div className=" sm:mt-32">
       <Features/>
       </div>
          </div>
        </div>
    </div>
  )
}
