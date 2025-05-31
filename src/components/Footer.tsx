
import { Separator } from "@/components/ui/separator";

export const Footer = () => {
  const footerSections = [
    {
      title: "Platform",
      links: ["Portfolio Accounting", "Fund Administration", "General Ledger", "Reporting & Analytics", "Compliance & Risk"]
    },
    {
      title: "Solutions",
      links: ["Hedge Funds", "Private Equity", "Family Offices", "Fund Administrators", "Investment Managers"]
    },
    {
      title: "Resources",
      links: ["Documentation", "API Reference", "Help Center", "Community", "Blog"]
    },
    {
      title: "Company",
      links: ["About Us", "Careers", "Press", "Partners", "Contact"]
    }
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Λ</span>
              </div>
              <span className="ml-2 text-xl font-bold">Logos</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              AI-powered financial operations platform for modern fund administration and portfolio management.
            </p>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8 bg-slate-700" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-slate-400 text-sm">
            © 2024 Logos Financial Technology. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
