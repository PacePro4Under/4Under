import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      question: "Do I need GPS or expensive hardware to use 4Under?",
      answer: "Not at all. One of the most unique advantages of 4Under is that it's entirely browser-based, meaning there's no need to purchase or install GPS devices, sensors, tablets, or any other tech-heavy equipment. All you need is a device that can access the internet—whether it's a phone, tablet, or desktop. This not only saves you thousands annually but also ensures easy adoption by your team without complicated setup."
    },
    {
      question: "Will our older or less tech-savvy marshals be able to use the system?",
      answer: "Absolutely. 4Under was designed specifically with real golf course operations in mind. We understand that not every team member is a tech wizard. That's why the interface is extremely intuitive. If your marshals can tap a hole number and enter basic info, they'll be up and running in no time. In fact, 4Under is actively used by both younger seasonal staff and staff in their 70s without issue."
    },
    {
      question: "How much does 4Under cost, and are there any hidden fees?",
      answer: "4Under is offered as a straightforward monthly subscription, with flexible options depending on your course's season and needs. You only pay for the months you actually use it—no annual contracts, no hidden fees, and no penalties for pausing. This makes it ideal for seasonal golf operations and budget-conscious facilities."
    },
    {
      question: "Does 4Under support shotgun starts, split tees, or staggered formats?",
      answer: "Yes. 4Under is built specifically for the realities of modern golf course operations, which means it fully supports shotgun tournaments, A/B waves, split tees, staggered starts, and traditional tee sheets. The system allows you to see exactly where each group is, no matter the format, with real-time updates and tracking."
    },
    {
      question: "What's included with the free trial?",
      answer: "Your free trial includes full access to the entire platform for two full weeks. We'll also schedule a one-on-one onboarding call with Cameron to walk your team through the setup and help customize the platform to suit your course's needs. This ensures you can test the system with your real staff, on your real tee sheet, with full support from day one."
    },
    {
      question: "Can multiple team members use the system at the same time?",
      answer: "Yes, and that's one of the best parts. 4Under is cloud-based, which means everyone—from the starter and marshals to the pro shop and backshop—can log in and access the same data in real time. Whether you're using it to coordinate starter assignments, monitor pace checkpoints, or review end-of-day reports, your entire team stays on the same page."
    },
    {
      question: "What if we already have a marshal system in place?",
      answer: "That's great. 4Under isn't meant to replace your marshals—it's meant to empower them. Rather than relying on gut feeling or vague estimates, 4Under gives your marshals real-time, objective data to support their on-course decisions and conversations. It enhances the work they're already doing and ensures they have the right information at the right time."
    },
    {
      question: "Can players track their own pace or estimated finish time?",
      answer: "Yes. 4Under includes a lightweight player-facing tool accessible via QR code at the starter's area or in carts. Golfers can quickly check their projected pace and estimated finish time even before they tee off. This creates immediate pace awareness among players and reduces the chances of slow play from the very beginning."
    },
    {
      question: "How fast can I get started?",
      answer: "Most courses can be fully onboarded and operational within 30 minutes. Our team is available to help walk you through setup, customize pace expectations, and ensure your staff is comfortable with the interface. Whether you're starting from scratch or switching from another system, 4Under is designed to be plug-and-play."
    },
    {
      question: "Do I need to install anything or download an app?",
      answer: "Nope. 4Under works 100% through your browser, which means there's nothing to download, no installations, and no risk of version issues. This keeps things clean and efficient—especially when you're trying to train multiple staff across different devices."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-white to-slate-50 section-spacing">
        <div className="container-standard">
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="font-bold text-slate-900 mb-8 leading-tight">
              Frequently Asked by Golf Operators
            </h1>
            <p className="text-xl sm:text-2xl text-slate-600 mb-12 leading-relaxed max-w-4xl mx-auto">
              Real questions from real golf professionals about how 4Under works.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-spacing bg-white">
        <div className="container-standard max-w-4xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-slate-200 rounded-lg px-6 py-2 shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-slate-900 hover:text-golf-green">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed pt-2 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing bg-slate-50">
        <div className="container-standard">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="font-bold text-slate-900 mb-8">
              Still Have Questions?
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed mb-12">
              Get in touch with Cameron directly or start your free trial to see how 4Under works for your course.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/start">
                <Button size="lg" className="btn-primary min-h-[56px] px-12 text-lg font-semibold rounded-xl">
                  Start Free Trial
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="border-2 border-golf-green text-golf-green hover:bg-golf-green hover:text-white min-h-[56px] px-12 text-lg font-semibold rounded-xl">
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