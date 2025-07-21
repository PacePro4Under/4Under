import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Features() {
  const features = [
    {
      title: "Starter Check-In",
      description: "Confirm expectations at the first tee."
    },
    {
      title: "Manual Checkpoints", 
      description: "Log group position with a single tap."
    },
    {
      title: "Intervention Mode",
      description: "Real-time coaching tool that sets target location."
    },
    {
      title: "Dashboard",
      description: "See every group's pace status live, color-coded."
    },
    {
      title: "Shotgun & Split Tee Support",
      description: "Built for real-world formats."
    },
    {
      title: "TV Display",
      description: "Show pace board in marshal tents or shops."
    },
    {
      title: "PDF Reports",
      description: "Download daily summaries."
    },
    {
      title: "Rental Tracking",
      description: "Track rental clubs and set alerts."
    },
    {
      title: "Admin Panel",
      description: "Adjust pace rules, formats, and defaults in seconds."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 to-white py-16 sm:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              A Simple System That Changes Everything
            </h1>
            <p className="text-xl sm:text-2xl text-slate-600 mb-8 leading-relaxed">
              Comprehensive pace management tools designed by golf professionals for real-world operations.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Outro */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Built for Golf Operations
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              What started as a tool to track slow days became the all-in-one pace solution your course has been waiting for.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-golf-green text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            See How It Works For Your Course
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Get two weeks of full access plus a 1-on-1 onboarding session.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/start">
              <Button size="lg" className="bg-white text-golf-green hover:bg-slate-100 px-8 py-4 text-lg font-semibold">
                Start Free Trial
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-golf-green px-8 py-4 text-lg font-semibold">
                Let's Talk Shop
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}