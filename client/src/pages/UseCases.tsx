import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useContentByPage, getContentValue } from "@/hooks/useContent";

export default function UseCases() {
  const { content, isLoading } = useContentByPage('usecases');

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
            {isLoading ? 'Loading...' : getContentValue(content, 'usecases_hero_title', 'Use Cases')}
          </h1>
          <p className="text-xl md:text-2xl golf-green font-semibold mb-8">
            {isLoading ? 'Loading...' : getContentValue(content, 'usecases_hero_subtitle', 'Real solutions for real golf operations')}
          </p>
          <div className="text-lg md:text-xl text-slate-700 max-w-3xl mx-auto">
            <p>
              {isLoading ? 'Loading...' : getContentValue(content, 'usecases_hero_description', 'See how 4Under transforms pace management across every type of golf operation.')}
            </p>
          </div>
        </div>
      </section>

      {/* Public Courses Section */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-sm mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              {isLoading ? 'Loading...' : getContentValue(content, 'usecases_public_title', 'Public Courses')}
            </h2>
            <p className="text-xl golf-green font-semibold mb-8">
              {isLoading ? 'Loading...' : getContentValue(content, 'usecases_public_subtitle', 'Optimize every round — even from first-time visitors.')}
            </p>
            <div className="space-y-4 text-lg text-slate-700">
              <p>• Track real-time pace and actual round lengths — no GPS needed.</p>
              <p>• Reduce call-ins, refund demands, and bad reviews.</p>
              <p>• Give marshals live data to defuse tense pace-of-play conversations.</p>
              <p>• See which tee times or time windows run long and adjust scheduling accordingly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Private & Member Clubs Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-slate-50 p-8 md:p-12 rounded-lg shadow-sm mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              {isLoading ? 'Loading...' : getContentValue(content, 'usecases_private_title', 'Private & Member Clubs')}
            </h2>
            <p className="text-xl golf-green font-semibold mb-8">
              {isLoading ? 'Loading...' : getContentValue(content, 'usecases_private_subtitle', 'Set the tone for your club culture.')}
            </p>
            <div className="space-y-4 text-lg text-slate-700">
              <p>• Identify members or groups who consistently fall behind.</p>
              <p>• Use data to support pace policies and maintain fairness.</p>
              <p>• Help starters and marshals deliver a consistent first-tee experience.</p>
              <p>• Reinforce pace expectations without confrontation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tournaments & Events Section */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-sm mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              {isLoading ? 'Loading...' : getContentValue(content, 'usecases_tournaments_title', 'Tournaments & Events')}
            </h2>
            <p className="text-xl golf-green font-semibold mb-8">
              {isLoading ? 'Loading...' : getContentValue(content, 'usecases_tournaments_subtitle', 'No more guessing who\'s behind.')}
            </p>
            <div className="space-y-4 text-lg text-slate-700">
              <p>• Shotgun format support lets you see every group's location and pace.</p>
              <p>• Know when a flight is falling behind — and why.</p>
              <p>• Use checkpoint logs to issue timely warnings with credibility.</p>
              <p>• Export post-event pace reports to sponsors, organizers, or players.</p>
            </div>
          </div>
        </div>
      </section>

      {/* For Every Course Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-golf-green p-8 md:p-12 rounded-lg shadow-sm text-white mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              {isLoading ? 'Loading...' : getContentValue(content, 'usecases_every_title', 'For Every Course')}
            </h2>
            <p className="text-xl font-semibold mb-8">
              {isLoading ? 'Loading...' : getContentValue(content, 'usecases_every_subtitle', 'You don\'t need GPS, a tablet budget, or a data analyst.')}
            </p>
            <div className="space-y-4 text-lg">
              <p>• 4Under was built by golf pros for real-world operations.</p>
              <p>• It works from a phone, tablet, or desktop — and empowers any staff member, young or old.</p>
              <p>• Whether your goal is revenue, reviews, reputation, or all three — pace is central to success.</p>
              <p>• And now it's measurable, trackable, and fixable.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
            {isLoading ? 'Loading...' : getContentValue(content, 'usecases_cta_title', 'Ready to transform your operations?')}
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            {isLoading ? 'Loading...' : getContentValue(content, 'usecases_cta_subtitle', 'See how 4Under works for your type of operation with a free trial.')}
          </p>
          <Link href="/demo">
            <Button className="bg-golf-green text-white px-12 py-4 text-lg hover:bg-golf-hover rounded-lg shadow-lg">
              {isLoading ? 'Loading...' : getContentValue(content, 'usecases_cta_button', 'Start Your Free Trial')}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}