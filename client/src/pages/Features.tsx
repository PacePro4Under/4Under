import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import starterCheckinScreenshot from "@/assets/starter-checkin-screenshot-hq.jpeg";
import manualCheckpoints1 from "@/assets/manual-checkpoints-1-hq.jpeg";
import manualCheckpoints2 from "@/assets/manual-checkpoints-2-hq.jpeg";
import interventionModeScreenshot from "@/assets/intervention-mode-hq.jpeg";
import tvModeScreenshot from "@/assets/tv-mode-1.png";
import shotgunScreenshot from "@/assets/shotgun-1.png";
import rentalSetTracking from "@/assets/rental-set-tracking.png";
import dashboardScreenshot from "@/assets/dashboard.png";
import adminPanelScreenshot from "@/assets/admin-panel.png";

export default function Features() {
  const coreTools = [
    {
      title: "Starter Check-In",
      description: "Log names, carts, and confirm pace talks. Tracks who received expectations at the tee."
    },
    {
      title: "Manual Checkpoints",
      description: "Staff can track where any group is (tee, fairway, green) and log checkpoint times."
    },
    {
      title: "Intervention Mode",
      description: "Pinpoint the exact location that a group needs to be in 20 minutes to get back on pace. Takes the guesswork out of pace management."
    },
    {
      title: "Real-Time Dashboard",
      description: "View every group's pace status live. Auto-flags slow play. Includes color-coded pace and group history."
    },
    {
      title: "Shotgun + Split Tee Support",
      description: "Supports A/B waves, shotgun starts, and hole-by-hole tracking for tournament formats."
    },
    {
      title: "TV Display Mode",
      description: "Read-only live pace board for pro shops or marshal tents."
    },
    {
      title: "PDF Reports",
      description: "Export daily summaries for management, committees, or record-keeping."
    },
    {
      title: "Rental Set Tracking",
      description: "Assign and track rental clubs. Alert the starter or pro shop when a set is out."
    },
    {
      title: "Admin Panel",
      description: "Change pace expectations, control format logic, or manage features on the fly."
    }
  ];

  const results = [
    "Cut average rounds by 15+ minutes",
    "Identified slow holes and logjam zones",
    "Caught carts going out multiple times per day",
    "Replaced \"heated\" pace conversations with calm, data-backed coaching",
    "Empowered both senior staff and junior marshals to do their jobs better",
    "Ended daily call-ins about slow play at our own course"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white py-12 sm:py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-slate-900 mb-6 sm:mb-8 leading-tight">
            What 4Under Does — In Plain Terms
          </h1>
          <div className="text-base sm:text-lg text-slate-700 max-w-3xl mx-auto space-y-4 sm:space-y-6">
            <p>You know the drill:</p>
            <ul className="text-left list-disc list-inside space-y-2 text-slate-600 leading-relaxed">
              <li>The tee sheet's packed.</li>
              <li>Golfers are calling the shop about slow play.</li>
              <li>Your marshal has a radio, but no proof.</li>
              <li>You're relying on gut, memory, and guesswork.</li>
            </ul>
            <p className="font-semibold text-slate-900 leading-relaxed">
              4Under changes that. It gives your team real-time visibility, structure, and reporting to manage pace of play with confidence — and ditch the pen and paper once and for all.
            </p>
          </div>
        </div>
      </section>

      {/* Core Tools Section */}
      <section className="bg-slate-50 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-slate-900 mb-8 sm:mb-12 text-center">Core Tools</h2>
          <div className="space-y-8">
            {coreTools.map((tool, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-4">{tool.title}</h3>
                <p className="text-lg text-slate-700">{tool.description}</p>
                {/* Screenshots for specific tools, placeholder for others */}
                {tool.title === "Starter Check-In" ? (
                  <div className="mt-6">
                    <img 
                      src={starterCheckinScreenshot}
                      alt="Starter Check-In interface showing how to log names, carts, and pace talks"
                      className="w-full h-auto rounded-lg shadow-md border border-slate-200"
                      style={{ 
                        imageRendering: 'auto', 
                        maxWidth: '100%',
                        filter: 'contrast(1.15) brightness(1.05) saturate(1.05)',
                        backfaceVisibility: 'hidden',
                        transform: 'translateZ(0)'
                      } as React.CSSProperties}
                    />
                  </div>
                ) : tool.title === "Manual Checkpoints" ? (
                  <div className="mt-6 space-y-4">
                    <img 
                      src={manualCheckpoints1}
                      alt="Manual Checkpoints interface showing staff tracking group locations"
                      className="w-full h-auto rounded-lg shadow-md border border-slate-200"
                      style={{ 
                        imageRendering: 'auto', 
                        maxWidth: '100%',
                        filter: 'contrast(1.15) brightness(1.05) saturate(1.05)',
                        backfaceVisibility: 'hidden',
                        transform: 'translateZ(0)'
                      } as React.CSSProperties}
                    />
                    <img 
                      src={manualCheckpoints2}
                      alt="Manual Checkpoints detailed view with checkpoint timing options"
                      className="w-full h-auto rounded-lg shadow-md border border-slate-200"
                      style={{ 
                        imageRendering: 'auto', 
                        maxWidth: '100%',
                        filter: 'contrast(1.15) brightness(1.05) saturate(1.05)',
                        backfaceVisibility: 'hidden',
                        transform: 'translateZ(0)'
                      } as React.CSSProperties}
                    />
                  </div>
                ) : tool.title === "Intervention Mode" ? (
                  <div className="mt-6">
                    <img 
                      src={interventionModeScreenshot}
                      alt="Intervention Mode showing precise location targets for groups to get back on pace within 20 minutes"
                      className="w-full h-auto rounded-lg shadow-md border border-slate-200"
                      style={{ 
                        imageRendering: 'auto', 
                        maxWidth: '100%',
                        filter: 'contrast(1.15) brightness(1.05) saturate(1.05)',
                        backfaceVisibility: 'hidden',
                        transform: 'translateZ(0)'
                      } as React.CSSProperties}
                    />
                  </div>
                ) : tool.title === "Real-Time Dashboard" ? (
                  <div className="mt-6">
                    <img 
                      src={dashboardScreenshot}
                      alt="Real-Time Dashboard showing live pace status with color-coded groups and intervention controls"
                      className="w-full h-auto rounded-lg shadow-md border border-slate-200"
                      style={{ 
                        imageRendering: 'crisp-edges', 
                        maxWidth: '100%',
                        filter: 'contrast(1.1) brightness(1.02)',
                        backfaceVisibility: 'hidden',
                        transform: 'translateZ(0)'
                      }}
                    />
                  </div>
                ) : tool.title === "Shotgun + Split Tee Support" ? (
                  <div className="mt-6">
                    <img 
                      src={shotgunScreenshot}
                      alt="Mass Shotgun Start configuration with multiple groups starting at different holes"
                      className="w-full h-auto rounded-lg shadow-md border border-slate-200"
                      style={{ 
                        imageRendering: 'crisp-edges', 
                        maxWidth: '100%',
                        filter: 'contrast(1.1) brightness(1.02)',
                        backfaceVisibility: 'hidden',
                        transform: 'translateZ(0)'
                      }}
                    />
                  </div>
                ) : tool.title === "TV Display Mode" ? (
                  <div className="mt-6">
                    <img 
                      src={tvModeScreenshot}
                      alt="TV Display Mode showing today's round times and pace statistics"
                      className="w-full h-auto rounded-lg shadow-md border border-slate-200"
                      style={{ 
                        imageRendering: 'crisp-edges', 
                        maxWidth: '100%',
                        filter: 'contrast(1.1) brightness(1.02)',
                        backfaceVisibility: 'hidden',
                        transform: 'translateZ(0)'
                      }}
                    />
                  </div>
                ) : tool.title === "Rental Set Tracking" ? (
                  <div className="mt-6">
                    <img 
                      src={rentalSetTracking}
                      alt="Rental Club Sets management interface with assignment tracking and status monitoring"
                      className="w-full h-auto rounded-lg shadow-md border border-slate-200"
                      style={{ 
                        imageRendering: 'crisp-edges', 
                        maxWidth: '100%',
                        filter: 'contrast(1.1) brightness(1.02)',
                        backfaceVisibility: 'hidden',
                        transform: 'translateZ(0)'
                      }}
                    />
                  </div>
                ) : tool.title === "Admin Panel" ? (
                  <div className="mt-6">
                    <img 
                      src={adminPanelScreenshot}
                      alt="Admin Panel settings for pace of play configuration and status thresholds"
                      className="w-full h-auto rounded-lg shadow-md border border-slate-200"
                      style={{ 
                        imageRendering: 'crisp-edges', 
                        maxWidth: '100%',
                        filter: 'contrast(1.1) brightness(1.02)',
                        backfaceVisibility: 'hidden',
                        transform: 'translateZ(0)'
                      }}
                    />
                  </div>
                ) : (
                  <div className="mt-6 bg-slate-100 h-32 rounded-lg flex items-center justify-center">
                    <span className="text-slate-400 text-sm">Screenshot placeholder</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-12 text-center">Real Results from the Field</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {results.map((result, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-slate-50 rounded-lg">
                <div className="w-6 h-6 bg-golf-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <p className="text-lg text-slate-700 font-medium">{result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-golf-green py-16">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Ready to Transform Your Course Operations?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            See how 4Under can streamline your pace-of-play management.
          </p>
          <Link href="/demo">
            <Button className="bg-white text-golf-green px-12 py-4 text-lg hover:bg-slate-100 rounded-lg shadow-lg font-semibold">
              Start Your Free Trial
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
