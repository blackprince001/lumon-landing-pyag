import { BentoCard } from "@/components/utility/bento-grid";
import DiagonalPattern from "@/components/utility/diagonal-pattern";
import { features } from "@/constants";

export default function Features() {
  return (
    <div className="w-full border-t-2 sm:grid  sm:grid-cols-[1fr_minmax(0,900px)_1fr] border-t-neutral-800">
      <DiagonalPattern side="left" />
      <div className=" pt-16">
        <div className="w-full flex flex-col justify-center items-center gap-6 py-14">
          <p className="text-2xl text-center font-dmsans sm:text-4xl text-white px-2">
            Personal Finance that works for You
          </p>
          <p className="text-neutral-500 sm:text-lg max-w-xl text-center p-4">
            “Budge AI brings together smart expense tracking, intuitive budgeting, instant syncing, and personalized AI insights to help you manage your money with ease and confidence.
          </p>
        </div>
        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-4">
            {features.map((feature) => (
              <BentoCard
                key={feature.name}
                {...feature}
                className={`${feature.className} min-h-[500px]`}
              />
            ))}
          </div>
        </div>
      </div>
      <DiagonalPattern side="right" />
    </div>
  );
}
