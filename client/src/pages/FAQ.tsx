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
    question: "Does 4under require GPS hardware?",
    answer: "No, 4under does not require any GPS hardware installation. Our system works through tablets used by play coordinators, eliminating upfront hardware costs and ongoing maintenance expenses. This makes it one of the most cost-effective pace-of-play solutions available."
  },
  {
    question: "How does the tracking system work?",
    answer: "Our system works through tablets operated by your play coordinators. As they monitor the course, coordinators input group positions and pace information. The system then provides real-time analytics, forecasting, and intervention tracking to help optimize pace-of-play across your entire facility."
  },
  {
    question: "What kind of training is required for staff?",
    answer: "4under is designed to be intuitive for golf professionals. Most coordinators can be trained on the system in under 30 minutes. We provide comprehensive onboarding materials, video tutorials, and ongoing support to ensure your team is comfortable with the platform."
  },
  {
    question: "Can I use my existing tablets?",
    answer: "Yes! 4under works on most modern tablets with internet connectivity. We support both iOS and Android devices. If you need new tablets, we can recommend specific models that work optimally with our system, but there's no requirement to purchase from us."
  },
  {
    question: "What kind of reports does 4under provide?",
    answer: "4under provides comprehensive reporting including daily pace summaries, intervention tracking, historical trends, coordinator performance metrics, and custom reports. All data can be exported for further analysis or integration with your existing course management systems."
  },
  {
    question: "Is there a free trial available?",
    answer: "Yes, we offer a free trial period so you can test 4under at your facility with no commitment. This allows you to see firsthand how our system can improve your pace-of-play management before making a decision."
  },
  {
    question: "What kind of support do you provide?",
    answer: "We provide comprehensive support including onboarding training, technical support during business hours, video tutorials, documentation, and regular system updates. Our team understands golf operations and can provide both technical and operational guidance."
  },
  {
    question: "How quickly can we get started?",
    answer: "Implementation is typically very quick since there's no hardware to install. After signing up, we can have your system configured and your team trained within 1-2 business days. Most courses are fully operational with 4under within a week of their initial demo."
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
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Get answers to common questions about 4under's pace-of-play tracking system.
          </p>
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
