import { Card, CardContent } from "@/components/ui/card";
import logo from "@/assets/Dark.png";
import { TypingAnimation } from "@/components/utility/typing-animation";
export default function SimpleChat() {
  return (
    <div className="flex flex-col h-screen p-8">
      <div className="flex justify-end items-start gap-2 mb-4">
        <Card className="max-w-[65%] p-5 bg-green-800 text-white border-none">
          <CardContent className="p-0">
            <p className="text-sm font-medium">
              I want to save more but still cover essentials and enjoy treats.
              Any tips?
            </p>
          </CardContent>
        </Card>
        <div className="flex items-center justify-center w-10 h-10 rounded-full ">
          <img
            src="https://github.com/shadcn.png"
            alt="logo logo"
            className="w-full h-full rounded-full"
          />
          ;
        </div>
      </div>

      <div className="flex justify-start items-start gap-2">
        <div className="flex items-center justify-center w-10 h-10 rounded-full ">
          <img
            src={logo}
            alt="logo logo"
            className="w-full h-10 rounded-full"
          />
        </div>

        <Card className="max-w-[75%] p-5 bg-zinc-800 border-none text-white">
          <CardContent className="p-0">
            <p className="text-sm font-medium">
              <TypingAnimation as="span">
                Try the 50/30/20 rule: 50% for needs, 30% for wants, 20% for
                savings. I can help automate savings and cut unnecessary
                expenses. Want a custom plan?
              </TypingAnimation>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
