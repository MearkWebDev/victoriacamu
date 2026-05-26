import { Link } from "react-router-dom";
import { MapPin, Mail, Phone, Linkedin, Twitter, Facebook } from "lucide-react";
import ERPLogo from "@/components/ERPLogo";

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Features", path: "/features" },
  { label: "Responsible AI", path: "/responsible-ai" },
  { label: "Implementation", path: "/implementation" },
  { label: "Career Hub", path: "/career-hub" },
];

const otherLinks = [
  { label: "Privacy Policy", path: "/privacy-policy" },
  { label: "Terms of Use", path: "/terms-of-use" },
  { label: "Register Interest", path: "/contact" },
  { label: "Contact Us", path: "/contact" },
  { label: "Support", path: "/contact" },
];

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="mb-3">
              <ERPLogo textColor="white" iconHeight="h-[40px] md:h-[55px]" />
            </div>
            <p className="text-sm leading-relaxed opacity-60 mb-4">
              School ERP and Career Hub solutions helping institutions, students, and educators create connected learning and career pathways.
            </p>
            <p className="text-xs leading-relaxed opacity-40">
              Implemented & marketed by SRM Technologies Australia Pty Ltd.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sans text-sm font-bold tracking-wide uppercase mb-4 opacity-40">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-sm opacity-60 hover:opacity-100 hover:text-[#f1b000] transition-all"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Other Links */}
          <div>
            <h4 className="font-sans text-sm font-bold tracking-wide uppercase mb-4 opacity-40">
              Other Links
            </h4>
            <ul className="space-y-3">
              {otherLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-sm opacity-60 hover:opacity-100 hover:text-[#f1b000] transition-all"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-sans text-sm font-bold tracking-wide uppercase mb-4 opacity-40">
              Contact
            </h4>
            <ul className="space-y-4 text-sm opacity-60">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5 opacity-80" />
                <div>
                  <p>SRM Technologies Australia Pty Ltd</p>
                  <p>Melbourne, Victoria, Australia</p>
                </div>
              </li>
              <li>
                <a href="mailto:info@camuerp.com.au" className="flex items-center gap-3 hover:opacity-100 hover:text-[#f1b000] transition-all">
                  <Mail className="w-4 h-4 flex-shrink-0 opacity-80" />
                  info@camuerp.com.au
                </a>
              </li>
              <li>
                <a href="tel:+611300000000" className="flex items-center gap-3 hover:opacity-100 hover:text-[#f1b000] transition-all">
                  <Phone className="w-4 h-4 flex-shrink-0 opacity-80" />
                  +61 1300 000 000
                </a>
              </li>
            </ul>
            <div className="flex gap-3 mt-5">
              {[
                { Icon: Linkedin, href: "#", label: "LinkedIn" },
                { Icon: Twitter, href: "#", label: "Twitter" },
                { Icon: Facebook, href: "#", label: "Facebook" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-background/15 flex items-center justify-center opacity-60 hover:opacity-100 hover:text-[#f1b000] hover:border-[#f1b000] transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs opacity-40">
            &copy; {new Date().getFullYear()} SRM Technologies Australia Pty Ltd. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs opacity-60">
            <Link to="/privacy-policy" className="hover:opacity-100 hover:text-[#f1b000] transition-colors duration-300">Privacy Policy</Link>
            <Link to="/terms-of-use" className="hover:opacity-100 hover:text-[#f1b000] transition-colors duration-300">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;