import { Link } from "wouter";
import { 
  Clock, 
  UserCheck, 
  BarChart3, 
  ShoppingCart, 
  Car, 
  DollarSign 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Features() {
  const coreTools = [
    {
      icon: UserCheck,
      title: "Starter Check-In",
      description: "Log names, carts, and confirm pace talks. Tracks who received expectations at the tee."
    },
    {
      icon: Clock,
      title: "Manual Checkpoints",
      description: "Staff can track where any group is (tee, fairway, green) and log checkpoint times."
    },
    {
      icon: BarChart3,
      title: "Real-Time Dashboard",
      description: "View every group's pace status live. Auto-flags slow play. Includes color-coded pace and group history."
    },
    {
      icon: UserCheck,
      title: "Shotgun + Split Tee Support",
      description: "Supports A/B waves, shotgun starts, and hole-by-hole tracking for tournament formats."
    },
    {
      icon: BarChart3,
      title: "TV Display Mode",
      description: "Read-only live pace board for pro shops or marshal tents."
    },
    {
      icon: BarChart3,
      title: "PDF Reports",
      description: "Export daily summaries for management, committees, or record-keeping."
    },
    {
      icon: ShoppingCart,
      title: "Rental Set Tracking",
      description: "Assign and track rental clubs. Alert the starter or pro shop when a set is out."
    },
    {
      icon: DollarSign,
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
    <div className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            What 4Under Does — In Plain Terms
          </h1>
          <div className="text-lg text-slate-600 max-w-3xl mx-auto space-y-4">
            <p>You know the drill:</p>
            <ul className="text-left list-disc list-inside space-y-2">
              <li>The tee sheet's packed.</li>
              <li>Golfers are calling the shop about slow play.</li>
              <li>Your marshal has a radio, but no proof.</li>
              <li>You're relying on gut, memory, and guesswork.</li>
            </ul>
            <p className="font-semibold">
              4Under changes that. It gives your team real-time visibility, structure, and reporting to manage pace of play with confidence — and ditch the pen and paper once and for all.
            </p>
          </div>
        </div>

        {/* Core Tools */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Core Tools</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {coreTools.map((tool, index) => (
              <Card key={index} className="p-6 shadow-sm border border-slate-200">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-golf-light rounded-lg flex items-center justify-center flex-shrink-0">
                      <tool.icon className="golf-green h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">{tool.title}</h3>
                      <p className="text-slate-600">{tool.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Real Results */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Real Results from the Field</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map((result, index) => (
              <Card key={index} className="p-6 shadow-sm border border-slate-200">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-golf-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <p className="text-slate-700 font-medium">{result}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-golf-green rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Course Operations?</h3>
            <p className="text-golf-light mb-6">See how 4under can streamline your pace-of-play management.</p>
            <Link href="/demo">
              <Button className="bg-white golf-green px-8 py-3 hover:bg-slate-100">
                Request Your Demo Today
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
