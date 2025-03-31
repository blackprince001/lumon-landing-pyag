import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Globe } from "@/components/utility/globe";
import SimpleChat from "@/features/bento/ai-chat";
import { LearnAndGrowCards } from "@/features/bento/book-marquee";
import {
  BookAudio,
  BotIcon,
  DollarSign,
  TrendingUpIcon,
  Users2
} from "lucide-react";

export const features = [
  {
    Icon: BotIcon,
    name: "Real-time AI Collaboration",
    description:
      "Get personalized financial advice from our AI. Get budgeting tips, investment strategies, and data-driven insights tailored to you.",
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
    name: "Connect & Lend",
    description:
      "Join secure peer-to-peer lending with clear terms and AI risk assessment. Lend for great returns or borrow at fair rates.",
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
    name: "Learn & Grow",
    description:
      "Start your investment journey with as little as Ghc 5. Access diversified portfolios tailored to your goals, track your progress, and improve your financial literacy through personalized educational content.",
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
    Icon: DollarSign,
    name: "Credit scoring analysis",
    description: "Analyze credit scores by filtering files based on date.",
    href: "/",
    cta: "Learn more",
    background: (
      <div className=" absolute top-8 right-10">
        <Card className="@container/card bg-neutral-800 border-none text-white ">
          <CardHeader className="relative">
            <CardDescription>Credit Score</CardDescription>
            <CardTitle className="@[250px]/card:text-5xl text-2xl font-semibold tabular-nums">
           700
            </CardTitle>
          </CardHeader>
          <CardFooter className="flex-col items-start gap-1 text-sm">
            <div className="line-clamp-1 flex gap-2 font-medium">
              Your credit score has increased <TrendingUpIcon className="size-4" />
            </div>
          </CardFooter>
        </Card>
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
