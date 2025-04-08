import { Button } from "@/components/ui/button";
import Lumon from "../../../public/lumon.png";

export default function Navbar () {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full px-4">
      <nav className="mt-6 h-16 bg-transparent border border-[#302f31] w-full max-w-screen-xl mx-auto rounded-full backdrop-blur-md">
        <div className="h-full flex items-center justify-between mx-auto px-4">
          <img src={Lumon} alt="Logo" className="h-10 w-10 border rounded-full" />

       
    
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              className="inline-flex text-black rounded-full"
            >
              Get early access
            </Button>
         
        
          </div>
        </div>
      </nav>
    </div>
  );
};
