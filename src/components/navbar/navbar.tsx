import logo from "@/assets/Dark.png";
import { BudgeAIFormNavbar } from "../modal";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full px-4">
      <nav className="mt-6 h-16 bg-transparent border border-zinc-800 w-full max-w-screen-xl mx-auto rounded-full backdrop-blur-md">
        <div className="h-full flex items-center justify-between mx-auto px-4">
          <img
            src={logo}
            alt="Logo"
            className="h-10 w-10 border border-zinc-700  rounded-full"
          />

          <div className="flex items-center gap-3">
            <BudgeAIFormNavbar />
          </div>
        </div>
      </nav>
    </div>
  );
}
