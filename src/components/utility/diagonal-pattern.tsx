export interface DiagonalPatternProps {
  className?: string;
  side?: "left" | "right";
}

export default function DiagonalPattern({
  className = "",
  side = "left",
}: Readonly<DiagonalPatternProps>) {
  return (
    <div
      className={`
          row-span-full 
          max-sm:hidden 
          text-zinc-800 
          border-x 
          border-x-current 
          bg-[size:10px_10px] 
          bg-fixed 
          bg-[image:repeating-linear-gradient(315deg,currentColor_0,currentColor_1px,_transparent_0,_transparent_50%)] 
          ${side === "left" ? "col-start-1" : "col-start-3"} 
          w-full
          ${className}
        `}
    />
  );
}
