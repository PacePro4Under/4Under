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
  const features = [
    {
      icon: Clock,
      title: "Live Pace Tracking & Forecasting",
      description: "Monitor real-time pace across all holes with predictive analytics to identify potential bottlenecks before they impact play.",
      details: [
        "Real-time group position tracking",
        "Predictive slowdown alerts",
        "Historical pace analysis"
      ]
    },
    {
      icon: UserCheck,
      title: "Play Coordinator Intervention Tracking",
      description: "Document and track all coordinator interventions with timestamps and outcomes for comprehensive pace management.",
      details: [
        "Intervention logging system",
        "Success rate tracking",
        "Coordinator performance metrics"
      ]
    },
    {
      icon: BarChart3,
      title: "Reporting & Analytics",
      description: "Comprehensive reporting dashboard with detailed statistics and insights to optimize course operations.",
      details: [
        "Daily pace summaries",
        "Historical trend analysis",
        "Custom report generation"
      ]
    },
    {
      icon: ShoppingCart,
      title: "Rental Set Tracking",
      description: "Track and manage rental equipment distribution and returns with automated notifications and inventory management.",
      details: [
        "Equipment checkout tracking",
        "Return reminders",
        "Inventory management"
      ]
    },
    {
      icon: Car,
      title: "Shuttle Request Notifications",
      description: "Streamline shuttle services with instant notifications and request management for improved customer service.",
      details: [
        "Instant request alerts",
        "Location-based routing",
        "Response time tracking"
      ]
    },
    {
      icon: DollarSign,
      title: "No GPS = No Upfront Hardware Costs",
      description: "Eliminate expensive GPS hardware installations and maintenance costs with our tablet-based solution.",
      details: [
        "Zero hardware investment",
        "Use existing tablets",
        "Reduced maintenance costs"
      ]
    }
  ];

  return (
    <div className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Powerful Features for Course Management
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Everything you need to optimize pace-of-play and enhance the golf experience at your course.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {features.map((feature, index) => (
            <Card key={index} className="p-8 shadow-sm border border-slate-200">
              <CardContent className="p-0">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-golf-light rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="golf-green h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-slate-600 mb-4">{feature.description}</p>
                    <ul className="text-sm text-slate-500 space-y-1">
                      {feature.details.map((detail, idx) => (
                        <li key={idx}>• {detail}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
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
