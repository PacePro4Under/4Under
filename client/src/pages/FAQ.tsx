import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Do I need GPS or expensive hardware?",
    answer: "No. 4Under runs in any browser. No tech installs. No extra costs."
  },
  {
    question: "Will my older marshals understand how to use it?",
    answer: "Yes. It's used daily by staff aged 70+ and younger staff alike. If they can tap a hole number, they can use 4Under."
  },
  {
    question: "How much does it cost?",
    answer: "It's a low-cost monthly subscription. You only pay for the months you use it."
  },
  {
    question: "Can this work for shotgun tournaments or split tees?",
    answer: "Absolutely. It's built to handle real-world formats like A/B waves, staggered starts, and shotguns."
  },
  {
    question: "What's included in the free trial?",
    answer: "Two full weeks of access plus a 1-on-1 onboarding call with Cameron to walk your team through setup."
  },
  {
    question: "Can multiple staff be on the system at once?",
    answer: "Yes. Everyone sees the same data in real time — marshals, starters, pro shop, or backshop."
  }
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-white py-12 sm:py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-slate-900 mb-6 sm:mb-8 leading-tight">
            Frequently Asked by Golf Operators
          </h1>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-slate-50 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="space-y-4 sm:space-y-6">
            {faqData.map((item, index) => (
              <Collapsible
                key={index}
                open={openItems.includes(index)}
                onOpenChange={() => toggleItem(index)}
              >
                <div className="bg-white border border-slate-200 rounded-lg shadow-sm">
                  <CollapsibleTrigger className="w-full px-4 sm:px-8 py-4 sm:py-6 text-left focus:outline-none focus:ring-2 focus:ring-golf-green touch-manipulation min-h-[48px]">
                    <div className="flex justify-between items-center gap-3">
                      <h3 className="text-base sm:text-lg md:text-xl font-semibold text-slate-900 leading-snug">{item.question}</h3>
                      <ChevronDown 
                        className={`h-5 w-5 sm:h-6 sm:w-6 text-slate-400 transition-transform flex-shrink-0 ${
                          openItems.includes(index) ? 'rotate-180' : ''
                        }`}
                      />
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="px-4 sm:px-8 pb-4 sm:pb-6">
                      <p className="text-base sm:text-lg text-slate-700 leading-relaxed">{item.answer}</p>
                    </div>
                  </CollapsibleContent>
                </div>
              </Collapsible>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-golf-green py-12 sm:py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6">Still have questions?</h2>
          <p className="text-base sm:text-lg text-white/90 mb-6 sm:mb-8">Can't find the answer you're looking for? Let's talk.</p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-golf-green px-6 sm:px-8 py-3 sm:py-4 hover:bg-slate-100 rounded-lg font-semibold touch-manipulation min-h-[48px] w-full sm:w-auto">
                Contact Us
              </Button>
            </Link>
            <Link href="/demo">
              <Button 
                variant="outline" 
                className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 hover:bg-white hover:text-golf-green rounded-lg font-semibold touch-manipulation min-h-[48px] w-full sm:w-auto"
              >
                Start Free Trial
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
