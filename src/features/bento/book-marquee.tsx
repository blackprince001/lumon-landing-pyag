import { Marquee } from "@/components/utility/marquee";
import { reviews } from "@/constants";
import { cn } from "@/lib/utils";


const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full text-white w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // dark styles
        "border-gray-50/[.1] bg-gray-50/[.10] hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-xs">{body}</blockquote>
    </figure>
  );
};

export function LearnAndGrowCards() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">

      <Marquee pauseOnHover reverse className="[--duration:15s]">
        {reviews.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
    </div>
  );
}


