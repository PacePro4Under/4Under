import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 to-white py-16 sm:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Pace of play shouldn't be a guessing game.
            </h1>
            <p className="text-xl sm:text-2xl text-slate-600 mb-8 leading-relaxed">
              4Under gives your marshals live pace data to manage rounds with confidence — no GPS or downloads required.
            </p>
            
            {/* Benefits List */}
            <div className="max-w-2xl mx-auto mb-10 space-y-3 text-left">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-golf-green rounded-full"></div>
                <span className="text-lg text-slate-700">Reduce average round times by 15+ minutes</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-golf-green rounded-full"></div>
                <span className="text-lg text-slate-700">Eliminate slow play complaints and refund demands</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-golf-green rounded-full"></div>
                <span className="text-lg text-slate-700">Empower marshals with structure, not stress</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/start">
                <Button size="lg" className="bg-golf-green hover:bg-golf-hover text-white px-8 py-4 text-lg font-semibold shadow-lg">
                  Start Free Trial
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              How Most Courses Manage Pace vs. How 4Under Does It
            </h2>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* The Old Way */}
              <div className="p-8 bg-slate-50">
                <h3 className="text-2xl font-bold text-slate-700 mb-6 text-center">The Old Way</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-slate-200">
                    <p className="text-slate-600">Gut feel, radios, guesswork</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-slate-200">
                    <p className="text-slate-600">Vague warnings</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-slate-200">
                    <p className="text-slate-600">Paper notes, sticky pads</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-slate-200">
                    <p className="text-slate-600">Refund requests</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-slate-200">
                    <p className="text-slate-600">"You need to speed up"</p>
                  </div>
                </div>
              </div>

              {/* With 4Under */}
              <div className="p-8 bg-golf-green text-white">
                <h3 className="text-2xl font-bold mb-6 text-center">With 4Under</h3>
                <div className="space-y-4">
                  <div className="bg-white/10 p-4 rounded-lg border border-white/20">
                    <p>Real-time data, tracked checkpoints</p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg border border-white/20">
                    <p>Actionable targets with Intervention Mode</p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg border border-white/20">
                    <p>Auto-logged reports + daily insights</p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg border border-white/20">
                    <p>15+ min faster average rounds</p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg border border-white/20">
                    <p>"Here's where you need to be in 20 min"</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              How It Works
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
              <div className="bg-golf-green text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Log the Start</h3>
                <p className="text-slate-600">Track names, carts, and confirm expectations.</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
              <div className="bg-golf-green text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Monitor Pace Live</h3>
                <p className="text-slate-600">Staff record group position: tee, fairway, or green.</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
              <div className="bg-golf-green text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Coach with Confidence</h3>
                <p className="text-slate-600">Use Intervention Mode to show where a group needs to be.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Built It Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8">
              Why We Built It
            </h2>
            
            <blockquote className="text-2xl sm:text-3xl text-slate-700 italic leading-relaxed mb-8">
              "It started as a simple tool to log slow rounds and track average pace per day. But once we put it in the hands of our team, it became something so much bigger. 4Under turned into a complete system to help courses coach players, spot issues early, and run smoother, faster, more professional golf operations — no GPS required."
            </blockquote>
            
            <p className="text-lg text-slate-600 font-medium">
              — Cameron Cox, PGA Professional & Founder of 4Under
            </p>
          </div>
        </div>
      </section>

      {/* Outcome Snapshot Section */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Outcome Snapshot
            </h2>
          </div>

          <div className="max-w-2xl mx-auto space-y-3 text-left">
            {[
              "Fewer pace complaints",
              "Smoother operations", 
              "Happier players",
              "Empowered marshals",
              "Tangible round time savings"
            ].map((outcome, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <div className="w-2 h-2 bg-golf-green rounded-full flex-shrink-0"></div>
                <span className="text-slate-700 font-medium">{outcome}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 sm:py-24 bg-golf-green text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Transform Your Pace Management?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Join courses that have already reduced round times and eliminated pace complaints.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/start">
              <Button size="lg" className="bg-white text-golf-green hover:bg-slate-100 px-8 py-4 text-lg font-semibold">
                Start Free Trial
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-golf-green px-8 py-4 text-lg font-semibold">
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}