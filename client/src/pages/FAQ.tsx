import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      question: "Do I need GPS or hardware?",
      answer: "No. Browser-based. No installs."
    },
    {
      question: "Can older staff use it?",
      answer: "Yes — it's used by 70+ year old marshals."
    },
    {
      question: "What if we already have marshals?",
      answer: "4Under empowers them with data."
    },
    {
      question: "Can it handle tournaments?",
      answer: "Yes. Shotgun and split-tee ready."
    },
    {
      question: "Does it work with players?",
      answer: "Yes — /pace-of-play lets them see predicted end times."
    },
    {
      question: "Multiple staff at once?",
      answer: "Of course. All real-time, all synced."
    },
    {
      question: "Cost?",
      answer: "Monthly, only when used."
    },
    {
      question: "Trial?",
      answer: "2 weeks free + onboarding call."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 to-white py-16 sm:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-xl sm:text-2xl text-slate-600 mb-8 leading-relaxed">
              Common questions about 4Under's pace management system.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-slate-200 rounded-lg">
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-slate-900 hover:text-golf-green">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-slate-600 text-lg">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              Want to see how 4Under fits your course? Let's talk golf ops.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/start">
                <Button size="lg" className="bg-golf-green hover:bg-golf-hover text-white px-8 py-4 text-lg font-semibold">
                  Start Free Trial
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="border-2 border-golf-green text-golf-green hover:bg-golf-green hover:text-white px-8 py-4 text-lg font-semibold">
                  Let's Talk Shop
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}