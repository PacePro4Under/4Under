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
    <div className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Frequently Asked by Golf Operators
          </h1>
        </div>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <Collapsible
              key={index}
              open={openItems.includes(index)}
              onOpenChange={() => toggleItem(index)}
            >
              <div className="border border-slate-200 rounded-lg">
                <CollapsibleTrigger className="w-full px-6 py-4 text-left focus:outline-none focus:ring-2 focus:ring-golf-green">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-slate-900">{item.question}</h3>
                    <ChevronDown 
                      className={`h-5 w-5 text-slate-400 transition-transform ${
                        openItems.includes(index) ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="px-6 pb-4">
                    <p className="text-slate-600">{item.answer}</p>
                  </div>
                </CollapsibleContent>
              </div>
            </Collapsible>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <div className="bg-slate-50 rounded-xl p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Still have questions?</h3>
            <p className="text-slate-600 mb-6">Can't find the answer you're looking for? Our team is here to help.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-golf-green text-white px-6 py-3 hover:bg-golf-dark">
                  Contact Support
                </Button>
              </Link>
              <Link href="/demo">
                <Button 
                  variant="outline" 
                  className="border-2 border-golf-green golf-green px-6 py-3 hover:bg-golf-light"
                >
                  Schedule a Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
