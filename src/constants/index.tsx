import { Globe } from "@/components/utility/globe";
import SimpleChat from "@/features/bento/ai-chat";
import { LearnAndGrowCards } from "@/features/bento/book-marquee";
import Stats08 from "@/features/bento/trends";
import {
  BookCheckIcon,
  BotIcon,
  ChartCandlestickIcon,
  Users2
} from "lucide-react";

export const features = [
  {
    Icon: BotIcon,
    name: "Talk To Your Money",
    description:
      `Get AI-powered money insights—track spending, budget smarter, and make confident decisions.`,
    href: "/",
    cta: "Learn more",
    background: (
      <div className=" absolute right-2 top-2">
        <SimpleChat />
      </div>
    ),
    className: "col-span-2 row-span-1",
  },
  {
    Icon: Users2,
    name: "Track Anywhere",
    description:
      "Sync transaction alerts from mobile money, banks, and M-Pesa for a complete financial view.",
    href: "/",
    cta: "Learn more",
    background: (
      <div className="  right-2 top-10">
        {/* <MarqueeDemo />{" "} */}
        <div className="max-w-2xl sm:w-full">
          <Globe />
        </div>
      </div>
    ),
    className: "col-span-2 row-span-1",
  },
  {
    Icon: BookCheckIcon,
    name: "Stay on Course",
    description: " Keep your spending aligned with your goals. See how you're doing—at a glance.",
    href: "/",
    cta: "Learn more",
    background: (
      <div className="pt-1 w-full absolute h-full">
        <Stats08 />
      </div>
    ),
    className: "col-span-2 row-span-1 pb-3",
  },
  {
    Icon: ChartCandlestickIcon,
    name: "Build Better Money Habits",
    description:
      "Track expenses, set goals, and manage money effortlessly with Budge AI.",
    href: "/",
    cta: "Learn more",
    background: (
      <div className="pt-8 ">
        <LearnAndGrowCards />
      </div>
    ),
    className: "col-span-2 row-span-1 pb-3",
  },
];

export const reviews = [
  {
    name: "Kwame",
    username: "@kwame",
    body: "Starting with just Ghc 5 felt like a small step, but the guided investment plans made it easy to grow my portfolio.",
    img: "https://avatar.vercel.sh/kwame",
  },
  {
    name: "Ama",
    username: "@ama",
    body: "The personalized financial education helped me understand risk and returns. Now, I invest with confidence!",
    img: "https://avatar.vercel.sh/ama",
  },
  {
    name: "Kojo",
    username: "@kojo",
    body: "I love how I can track my progress and adjust my strategy anytime. Investing has never been this simple.",
    img: "https://avatar.vercel.sh/kojo",
  },
  {
    name: "Abena",
    username: "@abena",
    body: "Diversified portfolios tailored to my goals? Yes, please! This has been a game-changer for my finances.",
    img: "https://avatar.vercel.sh/abena",
  },
  {
    name: "Yaw",
    username: "@yaw",
    body: "Learning about investments while actually investing is the best part. The ‘Learn & Grow’ approach is brilliant.",
    img: "https://avatar.vercel.sh/yaw",
  },
  {
    name: "Nana",
    username: "@nana",
    body: "I always thought investing was complicated, but this platform makes it easy for beginners like me.",
    img: "https://avatar.vercel.sh/nana",
  },
];

export const firstRow = reviews.slice(0, reviews.length / 2);
export const secondRow = reviews.slice(reviews.length / 2);
