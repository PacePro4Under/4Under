import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Features", href: "/features" },
    { name: "Use Cases", href: "/use-cases" },
    { name: "FAQ", href: "/faq" },
    { name: "Start Free Trial", href: "/start" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/" && location === "/") return true;
    if (href !== "/" && location.startsWith(href)) return true;
    return false;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-gradient-to-r from-white to-slate-50 shadow-lg border-b-2 border-golf-green sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-18 sm:h-20 lg:h-22">
            {/* Logo & Brand */}
            <Link href="/" className="flex items-center space-x-4 touch-manipulation group">
              <Logo />
              <div className="block">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-bold golf-green group-hover:text-golf-hover transition-colors">
                  4Under
                </span>
                <div className="text-sm sm:text-base text-slate-600 font-medium -mt-1">
                  Pace of Play System
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 touch-manipulation ${
                    item.name === "Start Free Trial"
                      ? "bg-golf-green text-white hover:bg-golf-hover shadow-md"
                      : isActive(item.href)
                      ? "golf-green bg-slate-100"
                      : "text-slate-700 hover:text-golf-green hover:bg-slate-100"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile CTA + Menu */}
            <div className="flex items-center space-x-2 lg:hidden">
              <Link href="/start" className="hidden sm:block">
                <button className="bg-golf-green text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-golf-hover transition-colors touch-manipulation">
                  Free Trial
                </button>
              </Link>
              
              <button
                className="p-2 rounded-lg hover:bg-slate-100 touch-manipulation min-h-[44px] min-w-[44px] flex items-center justify-center transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6 text-slate-700" />
                ) : (
                  <Menu className="h-6 w-6 text-slate-700" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="lg:hidden border-t border-slate-200 bg-white shadow-lg">
              <div className="py-3 space-y-2 px-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block px-4 py-3 rounded-lg font-medium transition-all touch-manipulation min-h-[48px] flex items-center ${
                      item.name === "Start Free Trial"
                        ? "bg-golf-green text-white hover:bg-golf-hover shadow-md"
                        : isActive(item.href)
                        ? "golf-green bg-slate-100 border-l-4 border-golf-green"
                        : "text-slate-700 hover:text-golf-green hover:bg-slate-50 active:bg-slate-100"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-6">
                <div className="flex items-center space-x-4">
                  <Logo />
                  <span className="text-2xl font-bold text-white">4Under</span>
                </div>
              </div>
              <p className="text-slate-400 mb-4 text-sm sm:text-base leading-relaxed">
                Professional pace-of-play tracking built by golf pros, for golf pros. Transform your course operations with our efficient, affordable solution.
              </p>
              <p className="golf-green font-semibold italic text-sm sm:text-base">
                "Built by pros, for pros."
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Quick Links</h3>
              <ul className="space-y-2">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-slate-400 hover:text-golf-green transition-colors text-sm sm:text-base touch-manipulation block py-1"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/privacy"
                    className="text-slate-400 hover:text-golf-green transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-slate-400 hover:text-golf-green transition-colors"
                  >
                    Terms of Use
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-8 pt-8 text-center">
            <p className="text-slate-400 text-sm">
              © 2024 4under.ca. All rights reserved. | Built for golf course professionals.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
