import { Link } from "wouter";
import { TrendingUp, Tablet, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-golf-light via-white to-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              Built by pros, for pros.
            </h1>
            <p className="text-xl md:text-2xl golf-green font-semibold mb-4">
              Track pace. Improve experience. No GPS required.
            </p>
            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              4Under is a low-cost, browser-based pace of play system built by golf professionals for golf professionals. It gives your marshals and play coordinators the tools they need to monitor, manage, and improve pace of play in real time—without relying on GPS, sensors, or expensive technology.
            </p>
            <p className="text-lg text-slate-600 mb-8 max-w-3xl mx-auto">
              Whether you're running daily tee times, split tees, or shotgun events, 4Under helps you solve pace problems before they start and gives your team the structure to operate with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/demo">
                <Button className="bg-golf-green text-white px-8 py-4 text-lg hover:bg-golf-dark">
                  Start Your Free Trial
                </Button>
              </Link>
              <Link href="/features">
                <Button 
                  variant="outline" 
                  className="border-2 border-golf-green golf-green px-8 py-4 text-lg hover:bg-golf-light"
                >
                  View Features
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* What Makes 4Under Different */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              What Makes 4Under Different
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-golf-light rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="golf-green h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">✅ Reduce average round times by 15+ minutes</h3>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-golf-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="golf-green h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">✅ Eliminate slow play complaints and refund requests</h3>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-golf-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Tablet className="golf-green h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">✅ Built-in tools for tournaments, rentals, and analytics</h3>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-golf-light rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="golf-green h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">✅ Works on any phone, tablet, or desktop</h3>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-golf-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Tablet className="golf-green h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">✅ No downloads, no GPS, no tech headaches</h3>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-golf-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="golf-green h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">✅ Built by a Head Pro — not a tech company</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Banner */}
      <div className="py-12 bg-golf-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold">
            Give your marshals the facts — not the friction.
          </h2>
        </div>
      </div>
    </div>
  );
}
