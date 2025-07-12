import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useContentByPage, getContentValue } from "@/hooks/useContent";

export default function Home() {
  const { content, isLoading } = useContentByPage('home');

  return (
    <div className="min-h-screen">
      {/* Hero Section - Story First */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
            {isLoading ? 'Loading...' : getContentValue(content, 'home_hero_title', 'Built by pros, for pros.')}
          </h1>
          <p className="text-xl md:text-2xl golf-green font-semibold mb-8">
            {isLoading ? 'Loading...' : getContentValue(content, 'home_hero_subtitle', 'Track pace. Improve experience. No GPS required.')}
          </p>
          <div className="text-lg md:text-xl text-slate-700 space-y-6 max-w-3xl mx-auto">
            <p>
              {isLoading ? 'Loading...' : getContentValue(content, 'home_hero_description_1', '4Under is a low-cost, browser-based pace of play system built by golf professionals for golf professionals. It gives your marshals and play coordinators the tools they need to monitor, manage, and improve pace of play in real time—without relying on GPS, sensors, or expensive technology.')}
            </p>
            <p>
              {isLoading ? 'Loading...' : getContentValue(content, 'home_hero_description_2', 'Whether you\'re running daily tee times, split tees, or shotgun events, 4Under helps you solve pace problems before they start and gives your team the structure to operate with confidence.')}
            </p>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-8">
              {isLoading ? 'Loading...' : getContentValue(content, 'home_trust_section_title', 'What Makes 4Under Different')}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Reduce average round times by 15+ minutes
              </h3>
            </div>
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Eliminate slow play complaints and refund requests
              </h3>
            </div>
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Built-in tools for tournaments, rentals, and analytics
              </h3>
            </div>
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Works on any phone, tablet, or desktop
              </h3>
            </div>
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                No downloads, no GPS, no tech headaches
              </h3>
            </div>
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Built by a Head Pro — not a tech company
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Banner */}
      <section className="bg-golf-green py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-xl md:text-2xl font-semibold text-white">
            Give your marshals the facts — not the friction.
          </h2>
        </div>
      </section>

      {/* CTA Section - Bottom of scroll */}
      <section className="bg-white py-16">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
            Ready to transform your course operations?
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            See how 4Under can streamline your pace-of-play management with a free 2-week trial.
          </p>
          <Link href="/demo">
            <Button className="bg-golf-green text-white px-12 py-4 text-lg hover:bg-golf-hover rounded-lg shadow-lg">
              Start Your Free Trial
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
