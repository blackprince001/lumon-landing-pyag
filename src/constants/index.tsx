
import SimpleChat from "@/features/bento/ai-chat";
import { BookAudio, BotIcon, CalendarIcon, Users2 } from "lucide-react";
// import { MarqueeDemo } from "./components/magicui/demo";
// import { OrbitingCirclesDemo } from "./test";
  
 export  const features = [
    {
      Icon: BotIcon,
      name: "Real-time AI Collaboration",
      description: "Get personalized financial advice from our AI. Get budgeting tips, investment strategies, and data-driven insights tailored to you.",
      href: "/",
      cta: "Learn more",
      background: (
        <div className=" absolute right-2 top-2">
        <SimpleChat/>
        </div>
      ),
      className: "col-span-2 row-span-1",
    },
    {
      Icon: Users2,
      name: "Connect & Lend",
      description: "Join secure peer-to-peer lending with clear terms and AI risk assessment. Lend for great returns or borrow at fair rates.",
      href: "/",
      cta: "Learn more",
      background: (
        <div className="pt-5 right-10 top-10">
          {/* <MarqueeDemo />{" "} */}
        </div>
      ),
      className: "col-span-2 row-span-1",
    },
    {
      Icon: BookAudio,
      name: "Learn & Grow",
      description: "Start your investment journey with as little as Ghc 5. Access diversified portfolios tailored to your goals, track your progress, and improve your financial literacy through personalized educational content.",
      href: "/",
      cta: "Learn more",
      background: (
        <div className="pt-5 right-10 top-10">
          {/* <OrbitingCirclesDemo />{" "} */}
        </div>
      ),
      className: "col-span-2 row-span-1 pb-3",
    },
    {
      Icon: CalendarIcon,
      name: "Calendar",
      description: "Use the calendar to filter your files by date.",
      href: "/",
      cta: "Learn more",
      background: (
        <div className=" absolute right-2 top-2">
<p>jnj</p>
        </div>
      ),
      className: "col-span-2 row-span-1 pb-3",
    },
  ];
