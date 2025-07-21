import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function UseCases() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 to-white py-16 sm:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              One Tool. Multiple Use Cases.
            </h1>
            <p className="text-xl sm:text-2xl text-slate-600 mb-8 leading-relaxed">
              No GPS. No app. No install. Built for real-world operations by golf professionals who've lived the problems.
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Public Courses */}
            <div className="bg-slate-50 p-8 rounded-xl">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Public Courses</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-golf-green rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-slate-700">Decrease refunds & complaints</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-golf-green rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-slate-700">Spot slow tee windows</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-golf-green rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-slate-700">Empower newer marshals</span>
                </div>
              </div>
            </div>

            {/* Private Clubs */}
            <div className="bg-golf-green text-white p-8 rounded-xl">
              <h2 className="text-2xl font-bold mb-6">Private Clubs</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <span>Back pace policies with data</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <span>Reinforce fairness across member groups</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <span>Create consistent culture</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Tournaments Section */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Tournaments & Shotguns
            </h2>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-golf-green rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-slate-700">See shotgun progress hole-by-hole</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-golf-green rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-slate-700">Know which flights are behind — instantly</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-golf-green rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-slate-700">Export post-event pace recaps for sponsors</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Universal Fit Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8">
              Universal Fit
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-slate-600 leading-relaxed mb-6">
                No GPS. No app. No install.
              </p>
              <p className="text-xl text-slate-600 leading-relaxed">
                Built for real-world operations by golf professionals who've lived the problems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-golf-green text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            See How 4Under Fits Your Course
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Start your free trial and discover how 4Under transforms pace management for your specific operation.
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