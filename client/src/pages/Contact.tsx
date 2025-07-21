import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Contact() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 to-white py-16 sm:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Let's Talk Shop
            </h1>
            <p className="text-xl sm:text-2xl text-slate-600 mb-8 leading-relaxed">
              Want to see how 4Under fits your course? Let's talk golf ops.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Email Contact */}
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-slate-900 mb-4">
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600 mb-6">
                  Get in touch directly with Cameron Cox, Founder & PGA Professional
                </p>
                <a 
                  href="mailto:cameron.cox.golf@gmail.com"
                  className="inline-block"
                >
                  <Button 
                    size="lg" 
                    className="bg-golf-green hover:bg-golf-hover text-white px-8 py-4 text-lg font-semibold"
                  >
                    cameron.cox.golf@gmail.com
                  </Button>
                </a>
              </CardContent>
            </Card>

            {/* Instagram Contact */}
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-slate-900 mb-4">
                  Instagram
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600 mb-6">
                  Follow along for golf operations insights and 4Under updates
                </p>
                <a 
                  href="https://www.instagram.com/cameron.cox.golf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button 
                    variant="outline"
                    size="lg" 
                    className="border-2 border-golf-green text-golf-green hover:bg-golf-green hover:text-white px-8 py-4 text-lg font-semibold"
                  >
                    @cameron.cox.golf
                  </Button>
                </a>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Quick Start CTA */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              Skip the call and start your free trial today. We'll set up your onboarding session after you sign up.
            </p>
            
            <Link href="/start">
              <Button size="lg" className="bg-golf-green hover:bg-golf-hover text-white px-8 py-4 text-lg font-semibold">
                Start Free Trial
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8">
              Built by Golf Professionals
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-slate-600 leading-relaxed mb-6">
                4Under was created by Cameron Cox, a PGA Professional who has lived the frustrations of pace management on the course.
              </p>
              <p className="text-xl text-slate-600 leading-relaxed">
                We understand golf operations because we've been there. Every feature was designed to solve real problems that golf professionals face every day.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}