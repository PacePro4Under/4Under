import { Link } from "wouter";
import { Button } from "@/components/ui/button";

// Import screenshots
import starterCheckinImg from "@/assets/starter-checkin-screenshot.png";
import manualCheckpoints1Img from "@/assets/manual-checkpoints-1.png";
import manualCheckpoints2Img from "@/assets/manual-checkpoints-2.png";
import interventionModeImg from "@/assets/intervention-mode.png";
import dashboardImg from "@/assets/dashboard.png";
import shotgunImg from "@/assets/shotgun-1.png";
import tvModeImg from "@/assets/tv-mode-1.png";
import rentalTrackingImg from "@/assets/rental-set-tracking.png";
import adminPanelImg from "@/assets/admin-panel.png";

export default function Features() {
  const features = [
    {
      title: "Starter Check-In",
      description: "Confirm expectations at the first tee.",
      image: starterCheckinImg,
      alt: "Starter check-in interface showing group name, cart number and tee time confirmation"
    },
    {
      title: "Manual Checkpoints", 
      description: "Log group position with a single tap.",
      image: manualCheckpoints1Img,
      alt: "Manual checkpoint tracking interface showing simple tap controls for tee, fairway, green"
    },
    {
      title: "Intervention Mode",
      description: "Real-time coaching tool that sets target location.",
      image: interventionModeImg,
      alt: "Intervention mode screen showing where groups need to be with specific timing targets"
    },
    {
      title: "Dashboard",
      description: "See every group's pace status live, color-coded.",
      image: dashboardImg,
      alt: "Live dashboard showing all groups with color-coded pace status indicators"
    },
    {
      title: "Shotgun & Split Tee Support",
      description: "Built for real-world formats.",
      image: shotgunImg,
      alt: "Shotgun tournament view showing multiple groups across different holes"
    },
    {
      title: "TV Display",
      description: "Show pace board in marshal tents or shops.",
      image: tvModeImg,
      alt: "TV display mode showing large format pace tracking for public viewing"
    },
    {
      title: "Checkpoint Details",
      description: "Detailed tracking with timestamps and notes.",
      image: manualCheckpoints2Img,
      alt: "Detailed checkpoint view with timestamps and group progress tracking"
    },
    {
      title: "Rental Tracking",
      description: "Track rental clubs and set alerts.",
      image: rentalTrackingImg,
      alt: "Rental equipment tracking interface with alerts and return reminders"
    },
    {
      title: "Admin Panel",
      description: "Adjust pace rules, formats, and defaults in seconds.",
      image: adminPanelImg,
      alt: "Admin panel showing configuration options for pace rules and course settings"
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

      {/* Features Grid with Screenshots */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-4">{feature.description}</p>
                </div>
                <div className="aspect-video bg-slate-100 overflow-hidden">
                  <img 
                    src={feature.image} 
                    alt={feature.alt}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
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