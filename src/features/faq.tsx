import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: " What is Budge AI, and how can it help me?",
    answer:
      "Budge AI is your smart money assistant! It tracks your spending and builds a budget for you.  No spreadsheets, no mental tracking—just clear insights and easy automation to keep your finances on track.",
  },
  {
    question: "Do I have to set up my own budget?",
    answer:
      "Nope! Budge AI does the heavy lifting. It analyzes your income and spending patterns to create a budget that works for you. Plus, it adapts over time, so if your habits change, your budget does too.",
  },
  {
    question: ". Can I link my bank accounts, and is it safe?",
    answer:
      "Yes, you can securely connect your bank accounts to sync transactions automatically. No manual effort! And our top-tier encryption and security measures keep your financial data safe, always.",
  },
  {
    question: " How can I “talk to my money” with Budge AI?",
    answer:
      "Budge AI makes managing your money feel like a conversation. “You can ask questions like “How much did I spend on dining last month?” or “Am I staying within my budget?”—and you’ll get instant, clear answers.",
  },

];

export default function FAQ() {
  return (
    <div>
      <div className=" sm:py-16 px-5 py-5 flex flex-col items-center gap-5 border-b-[1.5px] w-full border-neutral-800">
        <h2 className="text-3xl text-center font-semibold tracking-tight text-white sm:text-5xl font-bricolage">
          Frequently Asked Questions
        </h2>
        <p className="text-white text-center">
          Answers to common questions about our financial platform. If you have
          any other questions, please don't hesitate to contact us.
        </p>
      </div>
      <div className="max-w-7xl px-6 py-4 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-4xl pb-10">
          <Accordion type="single" collapsible>
            {faqs.map((faq) => (
              <AccordionItem key={faq.question} value={faq.question}>
                <AccordionTrigger className="text-base font-semibold text-white">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
