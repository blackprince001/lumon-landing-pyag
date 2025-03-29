import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is micro-investing and how does it work?",
    answer:
      "Micro-investing allows users to invest small amounts of money into diversified portfolios. Our platform automatically allocates funds based on user preferences and risk appetite.",
  },
  {
    question: "How does the AI-powered financial advisor help me?",
    answer:
      "Our AI advisor provides personalized insights, tracks spending habits, suggests budget improvements, and offers investment recommendations based on your financial data.",
  },
  {
    question: "Is my financial data secure on this platform?",
    answer:
      "Yes, we implement end-to-end encryption, multi-factor authentication, and strict data protection measures to ensure your financial data remains safe and private.",
  },
  {
    question: "How does peer-to-peer lending work?",
    answer:
      "Users can request or provide loans through our decentralized lending platform. The AI-driven credit scoring system helps assess borrower risk and ensures secure transactions.",
  },
  {
    question: "What is AI-powered credit scoring?",
    answer:
      "Our AI analyzes transaction history and cash flow to generate a dynamic credit score. This helps lenders make informed decisions when offering loans.",
  },

];

export default function FAQ() {
  return (
    <div>
      <div className=" sm:py-16 flex flex-col items-center gap-5 border-b-[1.5px] w-full border-neutral-800">
        <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl font-bricolage">Frequently Asked Questions</h2>
        <p className="text-white">Answers to common questions about our financial platform. If you have any other questions, please don't hesitate to contact us.</p>
      </div>
      <div className="max-w-7xl px-6 py-4 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-4xl pb-10">
          <Accordion type="single" collapsible >
            {faqs.map((faq) => (
              <AccordionItem key={faq.question} value={faq.question}>
                <AccordionTrigger className="text-base font-semibold text-white">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-gray-300">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
