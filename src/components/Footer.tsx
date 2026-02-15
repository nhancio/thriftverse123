import { Link } from "react-router-dom";
import { Instagram, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background mt-8 sm:mt-12">
      <div className="container py-8 sm:py-10 px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="inline-block">
              <img
                src="/images/full logo thryft final.png"
                alt="Thryft"
                className="h-8 md:h-10 w-auto max-w-[140px] object-contain object-left"
                onError={(e) => {
                  const t = e.target as HTMLImageElement;
                  if (!t.dataset.fallback) {
                    t.dataset.fallback = "1";
                    t.src = "/images/logo.png";
                  }
                }}
              />
            </Link>
            <p className="text-background/70 text-sm mt-3 sm:mt-4 max-w-xs">
              The Gen Z marketplace for unique finds. Thrifting made fresh, sustainable, and social.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.instagram.com/__thryft___/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/70 hover:text-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <nav className="flex flex-col gap-2 text-sm text-background/70">
              <Link to="/browse" className="hover:text-primary transition-colors">Browse All</Link>
              <Link to="/categories" className="hover:text-primary transition-colors">Categories</Link>
              <Link to="/browse?category=iPhone" className="hover:text-primary transition-colors">iPhone</Link>
              <Link to="/browse?category=MacBook" className="hover:text-primary transition-colors">MacBook</Link>
              <Link to="/browse?category=Watch" className="hover:text-primary transition-colors">Watch</Link>
            </nav>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-semibold mb-4">Help</h4>
            <nav className="flex flex-col gap-2 text-sm text-background/70">
              <a
                href="tel:7095288950"
                className="hover:text-primary transition-colors flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5" />
                70952 88950
              </a>
              <a
                href="tel:6304408747"
                className="hover:text-primary transition-colors flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5" />
                63044 08747
              </a>
              <Link to="/about" className="hover:text-primary transition-colors">About</Link>
              <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
            </nav>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-6 text-center">
          <p className="text-xs sm:text-sm text-background/50">
            © 2026 Thryft. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
