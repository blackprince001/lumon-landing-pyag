import { Button } from "@/components/ui/button";
import { AnimatedShinyText } from "@/components/utility/animated-shiny-text";
import { BorderBeam } from "@/components/utility/border-beam";
import { LineShadowText } from "@/components/utility/line-shadow-text";
import { NeonGradientCard } from "@/components/utility/neon-gradient-card";
import { cn } from "@/lib/utils";

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
                <span>✨ Introducing Magic UI</span>
              </AnimatedShinyText>
            </div>
          </div>
          <h1 className="text-5xl font-semibold font-bricolage tracking-tight text-balance text-white sm:text-7xl">
            A bigger, better financial{" "}
            <LineShadowText
              className="italic text-green-700"
              shadowColor={" #16a34a "}
            >
              Boost!
            </LineShadowText>
          </h1>
          <p className="mt-8 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
            Combine micro-investing, peer-to-peer lending, and AI-powered
            financial advice in one powerful platform to take control of your
            financial future.
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
          <div className="relative w-fit h-fit max-w-full text-green-100">
            <img
              alt="App screenshot"
              src="https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png"
              width={2432}
              height={1442}
              className="rounded-md bg-white/5 ring-1 shadow-2xl ring-white/10 max-w-full object-contain"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent via-[#010100]/30 to-[#010100] rounded-md pointer-events-none opacity-90"></div>
            <BorderBeam duration={8} size={100} />
          </div>
        </NeonGradientCard>
      </div>
    </div>
  );
}
