import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useContentByPage, getContentValue } from "@/hooks/useContent";
import { Clock, ShieldCheck, BarChart3, Smartphone, WifiOff, User } from "lucide-react";

export default function Home() {
  const { content, isLoading } = useContentByPage('home');

  return (
    <div className="min-h-screen">
      {/* Hero Section - Story First */}
      <section className="bg-white py-12 sm:py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          {/* 4Under Brand */}
          <div className="mb-4 sm:mb-6">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold golf-green mb-2">4Under</h2>
            <div className="w-24 h-1 bg-golf-green mx-auto"></div>
          </div>
          
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-slate-900 mb-6 sm:mb-8 leading-tight">
            {isLoading ? 'Loading...' : getContentValue(content, 'home_hero_title', 'Built by pros, for pros.')}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl golf-green font-semibold mb-6 sm:mb-8">
            {isLoading ? 'Loading...' : getContentValue(content, 'home_hero_subtitle', 'Track pace. Improve experience. No GPS required.')}
          </p>
          <div className="text-base sm:text-lg md:text-xl text-slate-700 space-y-4 sm:space-y-6 max-w-3xl mx-auto">
            <p className="leading-relaxed">
              {isLoading ? 'Loading...' : getContentValue(content, 'home_hero_description_1', '4Under is a low-cost, browser-based pace of play system built by golf professionals for golf professionals. It gives your marshals and play coordinators the tools they need to monitor, manage, and improve pace of play in real time—without relying on GPS, sensors, or expensive technology.')}
            </p>
            <p className="leading-relaxed">
              {isLoading ? 'Loading...' : getContentValue(content, 'home_hero_description_2', 'Whether you\'re running daily tee times, split tees, or shotgun events, 4Under helps you solve pace problems before they start and gives your team the structure to operate with confidence.')}
            </p>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-slate-50 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-slate-900 mb-4 sm:mb-8">
              {isLoading ? 'Loading...' : getContentValue(content, 'home_trust_section_title', 'What Makes 4Under Different')}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 text-center">
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group cursor-pointer touch-manipulation">
              <div className="flex justify-center mb-3 sm:mb-4">
                <Clock className="h-10 w-10 sm:h-12 sm:w-12 text-golf-green group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-2 group-hover:text-golf-green transition-colors duration-300 leading-snug">
                {isLoading ? 'Loading...' : getContentValue(content, 'home_benefit_1', 'Reduce average round times by 15+ minutes')}
              </h3>
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group cursor-pointer touch-manipulation">
              <div className="flex justify-center mb-3 sm:mb-4">
                <ShieldCheck className="h-10 w-10 sm:h-12 sm:w-12 text-golf-green group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-2 group-hover:text-golf-green transition-colors duration-300 leading-snug">
                {isLoading ? 'Loading...' : getContentValue(content, 'home_benefit_2', 'Eliminate slow play complaints and refund requests')}
              </h3>
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group cursor-pointer touch-manipulation">
              <div className="flex justify-center mb-3 sm:mb-4">
                <BarChart3 className="h-10 w-10 sm:h-12 sm:w-12 text-golf-green group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-2 group-hover:text-golf-green transition-colors duration-300 leading-snug">
                {isLoading ? 'Loading...' : getContentValue(content, 'home_benefit_3', 'Built-in tools for tournaments, rentals, and analytics')}
              </h3>
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group cursor-pointer touch-manipulation">
              <div className="flex justify-center mb-3 sm:mb-4">
                <Smartphone className="h-10 w-10 sm:h-12 sm:w-12 text-golf-green group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-2 group-hover:text-golf-green transition-colors duration-300 leading-snug">
                {isLoading ? 'Loading...' : getContentValue(content, 'home_benefit_4', 'Works on any phone, tablet, or desktop')}
              </h3>
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group cursor-pointer touch-manipulation">
              <div className="flex justify-center mb-3 sm:mb-4">
                <WifiOff className="h-10 w-10 sm:h-12 sm:w-12 text-golf-green group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-2 group-hover:text-golf-green transition-colors duration-300 leading-snug">
                {isLoading ? 'Loading...' : getContentValue(content, 'home_benefit_5', 'No downloads, no GPS, no tech headaches')}
              </h3>
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group cursor-pointer touch-manipulation">
              <div className="flex justify-center mb-3 sm:mb-4">
                <User className="h-10 w-10 sm:h-12 sm:w-12 text-golf-green group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-2 group-hover:text-golf-green transition-colors duration-300 leading-snug">
                {isLoading ? 'Loading...' : getContentValue(content, 'home_benefit_6', 'Built by a Head Pro — not a tech company')}
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Banner */}
      <section className="bg-golf-green py-8 sm:py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-white leading-relaxed">
            Give your marshals the facts — not the friction.
          </h2>
        </div>
      </section>

      {/* CTA Section - Bottom of scroll */}
      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-4 sm:mb-6 leading-tight">
            Ready to transform your course operations?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mb-6 sm:mb-8 leading-relaxed">
            See how 4Under can streamline your pace-of-play management with a free 2-week trial.
          </p>
          <Link href="/demo">
            <Button className="bg-golf-green text-white px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg hover:bg-golf-hover rounded-lg shadow-lg touch-manipulation min-h-[48px]">
              Start Your Free Trial
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
