import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { type ChartConfig, ChartContainer } from "@/components/ui/chart";
import { PolarAngleAxis, RadialBar, RadialBarChart } from "recharts";

const data = [
  {
    name: "HR",
    progress: 25,
    budget: "$1,000",
    current: "$250",
    href: "#",
    fill: "#15803d",
  },


];

const chartConfig = {
  progress: {
    label: "Progress",
    color: "var(--secondary)",
  },
} satisfies ChartConfig;

export default function Stats08() {
  return (
    <div className="flex items-center justify-center p-10 w-full">
      <dl className="grid grid-cols-1 gap-6 w-full max-w-md mx-auto">
        {data.map((item) => (
          <Card key={item.name} className="p-0 gap-0 bg-neutral-800 text-white border-neutral-800">
            <CardContent className="p-4">
              <div className="flex items-center space-x-3">
                <div className="relative flex items-center justify-center">
                  <ChartContainer
                    config={chartConfig}
                    className="h-[80px] w-[80px]"
                  >
                    <RadialBarChart
                      data={[item]}
                      innerRadius={30}
                      outerRadius={60}
                      barSize={6}
                      startAngle={90}
                      endAngle={-270}
                    >
                      <PolarAngleAxis
                        type="number"
                        domain={[0, 100]}
                        angleAxisId={0}
                        tick={false}
                        axisLine={false}
                      />
                      <RadialBar
                        dataKey="progress"
                        background
                        cornerRadius={10}
                        fill={item.fill}
                        angleAxisId={0}
                      />
                    </RadialBarChart>
                  </ChartContainer>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-base font-medium" style={{ color: item.fill }}>
                      {item.progress}%
                    </span>
                  </div>
                </div>
                <div>
                  <dd className="text-base font-medium text-white">
                    {item.current} / {item.budget}
                  </dd>
                  <dt className="text-sm text-zinc-500">
                    Budget {item.name}
                  </dt>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex items-center justify-end border-t border-border border-t-neutral-500  !p-0">
              <a
                href={item.href}
                className="text-sm font-medium text-primary px-6 py-3 hover:text-primary/90"
              >
                View more &#8594;
              </a>
            </CardFooter>
          </Card>
        ))}
      </dl>
    </div>
  );
}
