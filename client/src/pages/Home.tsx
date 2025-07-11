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
              Professional Pace-of-Play Tracking
            </h1>
            <p className="text-xl md:text-2xl golf-green font-semibold mb-4">
              "Built by pros, for pros."
            </p>
            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              The most efficient, affordable pace-of-play solution — no GPS required.
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

      {/* Value Propositions */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-golf-light rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="golf-green h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Real-Time Tracking</h3>
              <p className="text-slate-600">
                Monitor pace-of-play across your entire course with live updates and forecasting.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-golf-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Tablet className="golf-green h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">No GPS Hardware</h3>
              <p className="text-slate-600">
                Eliminate upfront hardware costs with our tablet-based coordinator system.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-golf-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="golf-green h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Built for Professionals</h3>
              <p className="text-slate-600">
                Designed by golf professionals for course operators and PGA pros.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
