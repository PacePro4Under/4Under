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
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8">
            Frequently Asked by Golf Operators
          </h1>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-6">
            {faqData.map((item, index) => (
              <Collapsible
                key={index}
                open={openItems.includes(index)}
                onOpenChange={() => toggleItem(index)}
              >
                <div className="bg-white border border-slate-200 rounded-lg shadow-sm">
                  <CollapsibleTrigger className="w-full px-8 py-6 text-left focus:outline-none focus:ring-2 focus:ring-golf-green">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg md:text-xl font-semibold text-slate-900">{item.question}</h3>
                      <ChevronDown 
                        className={`h-6 w-6 text-slate-400 transition-transform ${
                          openItems.includes(index) ? 'rotate-180' : ''
                        }`}
                      />
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="px-8 pb-6">
                      <p className="text-lg text-slate-700">{item.answer}</p>
                    </div>
                  </CollapsibleContent>
                </div>
              </Collapsible>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-golf-green py-16">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Still have questions?</h2>
          <p className="text-lg text-white/90 mb-8">Can't find the answer you're looking for? Let's talk.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-golf-green px-8 py-4 hover:bg-slate-100 rounded-lg font-semibold">
                Contact Us
              </Button>
            </Link>
            <Link href="/demo">
              <Button 
                variant="outline" 
                className="border-2 border-white text-white px-8 py-4 hover:bg-white hover:text-golf-green rounded-lg font-semibold"
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
