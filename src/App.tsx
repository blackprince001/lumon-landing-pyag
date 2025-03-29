import Navbar from "@/components/navbar/navbar";
import Hero from "@/features/hero";
import Features from "@/features/features";
import Mission from "@/features/mission";
import Faq from "@/features/faq";
import { Button } from "./components/ui/button";
import Footer04Page from "./features/footer";

export default function App(){
  return (
    <div className="w-full min-h-screen bg-background font-manrope ">
       <div className="w-full">
       <div className="mx-auto max-w-7xl px-6 lg:px-4 h-full w-full  border-x-[1.5px] border-neutral-800 ">
        <div className="w-full border-x-[1.5px] min-h-full border-neutral-800">
          <Navbar/>
          <Hero/>

       <div className=" sm:mt-32">
       <Features/>
       </div>
          </div>

<Mission/>
<div className="w-full border-x-[1.5px] min-h-full border-neutral-800">
  <div className="w-full ">
<Faq/>
  </div>
  </div>


  <div className="bg-green-800 ">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Ready to Transform Your Financial Future?
          </h2>
       
       <Button className=" h-10 mt-16 rounded-3xl px-8">
Start today for free
       </Button>
     
        </div>
      </div>
    </div>
    <Footer04Page/>
        </div>
       </div>
    </div>
  )
}
