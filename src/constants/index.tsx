import { Globe } from "@/components/utility/globe";
import SimpleChat from "@/features/bento/ai-chat";
import { LearnAndGrowCards } from "@/features/bento/book-marquee";
import Stats08 from "@/features/bento/trends";
import {
  BookAudio,
  BotIcon,
  TrendingUpDown,
  Users2
} from "lucide-react";

export const features = [
  {
    Icon: BotIcon,
    name: "Talk To Your Money",
    description:
      `Get personalized money insights from Budge's AI.
Ask questions about your spending, get smart budgeting tips, and make confident financial decisions—all powered by your real-time financial data.
`,
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
      "Whether it's mobile money in Accra, a bank in Lagos, or M-Pesa in Nairobi, Budge AI syncs with your transaction alerts—SMS, email, or push—so you can manage all your finances in one place, effortlessly.",
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
    Icon: BookAudio,
    name: "Build Better Money Habits",
    description:
      "Track your expenses, set savings goals, and stay on top of your financial life. Budge AI makes personal finance simple, intuitive, and designed for how you actually live",
    href: "/",
    cta: "Learn more",
    background: (
      <div className="pt-8 ">
        <LearnAndGrowCards />
      </div>
    ),
    className: "col-span-2 row-span-1 pb-3",
  },
  {
    Icon: TrendingUpDown,
    name: "Patterns, Over Time",
    description: "Filter transactions by date and category to spot trends. Budge AI helps you understand your money habits so you can make smarter decisions, month after month.",
    href: "/",
    cta: "Learn more",
    background: (
      <div className="pt-1 w-full absolute h-full">
    
    <Stats08/>
   
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
