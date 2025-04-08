import { Button } from "@/components/ui/button";
import { AnimatedShinyText } from "@/components/utility/animated-shiny-text";
import { BorderBeam } from "@/components/utility/border-beam";
import { LineShadowText } from "@/components/utility/line-shadow-text";
import { NeonGradientCard } from "@/components/utility/neon-gradient-card";
import { cn } from "@/lib/utils";
import app from "@/assets/Screenshot.png";

export default function Hero() {
  return (
    <div className="py-24 sm:py-32 lg:pb-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl my-32 text-center">
          <div className="z-10 flex min-h-fit my-5 items-center justify-center">
            <div
              className={cn(
                "group rounded-full border border-neutral-700  text-base text-white transition-all ease-in hover:cursor-pointer bg-neutral-900 hover:bg-neutral-800"
              )}
            >
              <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out  hover:duration-300 hover:dark:text-neutral-400">
                <span className="text-sm">Universal bank and mobile money support now available</span>
              </AnimatedShinyText>
            </div>
          </div>
          <h1 className="text-5xl font-semibold font-bricolage tracking-tight text-balance text-white sm:text-7xl">
          A    <LineShadowText
              className="italic text-green-700"
              shadowColor={" #16a34a "}
            >
         money 
            </LineShadowText>management app you’ll enjoy using
          
          </h1>
          <p className="mt-8 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
          Talk to your money, track insights effortlessly, and let automation do the heavy lifting—Budge AI makes managing your finances easier than ever.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button className="rounded-full bg-green-700" size="lg">
              Get Started
            </Button>
          </div>
        </div>
        <NeonGradientCard
          className="mt-16 sm:mt-24 w-fit max-w-full mx-auto "
          borderSize={0}
          padding={0}
          neonColors={{
            firstColor: "#dcfce7",
            secondColor: " #22c55e ",
          }}
        >
          <div className="relative w-fit h-fit max-w-full rounded-[4rem] text-green-100">
          <svg role="img" viewBox="0 0 366 729" className="mx-auto w-[22.875rem] max-w-full drop-shadow-xl">
              <title>App screenshot</title>
              <defs>
                <clipPath id="2ade4387-9c63-4fc4-b754-10e687a0d332">
                  <rect rx={36} width={316} height={684} />
                </clipPath>
              </defs>
              <path
                d="M363.315 64.213C363.315 22.99 341.312 1 300.092 1H66.751C25.53 1 3.528 22.99 3.528 64.213v44.68l-.857.143A2 2 0 0 0 1 111.009v24.611a2 2 0 0 0 1.671 1.973l.95.158a2.26 2.26 0 0 1-.093.236v26.173c.212.1.398.296.541.643l-1.398.233A2 2 0 0 0 1 167.009v47.611a2 2 0 0 0 1.671 1.973l1.368.228c-.139.319-.314.533-.511.653v16.637c.221.104.414.313.56.689l-1.417.236A2 2 0 0 0 1 237.009v47.611a2 2 0 0 0 1.671 1.973l1.347.225c-.135.294-.302.493-.49.607v377.681c0 41.213 22 63.208 63.223 63.208h95.074c.947-.504 2.717-.843 4.745-.843l.141.001h.194l.086-.001 33.704.005c1.849.043 3.442.37 4.323.838h95.074c41.222 0 63.223-21.999 63.223-63.212v-394.63c-.259-.275-.48-.796-.63-1.47l-.011-.133 1.655-.276A2 2 0 0 0 366 266.62v-77.611a2 2 0 0 0-1.671-1.973l-1.712-.285c.148-.839.396-1.491.698-1.811V64.213Z"
                fill="#4B5563"
              />
              <path
                d="M16 59c0-23.748 19.252-43 43-43h246c23.748 0 43 19.252 43 43v615c0 23.196-18.804 42-42 42H58c-23.196 0-42-18.804-42-42V59Z"
                fill="#343E4E"
              />
              <foreignObject
                width={316}
                height={684}
                clipPath="url(#2ade4387-9c63-4fc4-b754-10e687a0d332)"
                transform="translate(24 24)"
              >
                <img alt="" src={app} className="w-full h-full object-fit" />
              </foreignObject>
            </svg>

            <BorderBeam duration={8} size={100} />
          </div>
        </NeonGradientCard>
      </div>
    </div>
  );
}
