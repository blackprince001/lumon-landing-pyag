import Lumon from "@/assets/ChatGPT_Image_Mar_28_2025_11_31_52_PM.webp";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { NavMenu } from "./nav-menu";

export const NavigationSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full">
          <Menu className="text-black" />
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-background border-l-0">
      <img src={Lumon} alt="Logo" className="h-10 w-10 border rounded-full" />
        <NavMenu orientation="vertical" className="mt-12 text-white" />
      </SheetContent>
    </Sheet>
  );
};
