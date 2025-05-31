
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play, Sparkles } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative pt-20 pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-600/10 to-indigo-600/10 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Announcement Badge */}
          <div className="mb-8 flex justify-center">
            <Badge variant="secondary" className="px-4 py-2 bg-white/50 backdrop-blur-sm border border-blue-200 text-blue-700 hover:bg-white/70 transition-colors">
              <Sparkles className="w-4 h-4 mr-2" />
              Introducing AI-Powered Fund Administration
              <ArrowRight className="w-4 h-4 ml-2" />
            </Badge>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
            The Future of{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Financial Operations
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Logos revolutionizes portfolio accounting and fund administration with AI-powered automation, 
            eliminating manual processes and delivering intelligent insights for financial professionals.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-lg px-8 py-4 h-auto">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-auto border-slate-300 hover:bg-slate-50">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col items-center space-y-4">
            <p className="text-sm text-slate-500">Trusted by leading financial institutions</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {["Goldman Sachs", "BlackRock", "Citadel", "Bridgewater", "Apollo"].map((company) => (
                <div key={company} className="text-slate-400 font-medium text-lg">
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="mt-20 relative">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-2xl border border-slate-200 p-6 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-6 text-white">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                </div>
                <div className="text-sm text-slate-400">Logos Dashboard</div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-slate-800 rounded-lg p-4">
                  <div className="text-sm text-slate-400 mb-2">Total AUM</div>
                  <div className="text-2xl font-bold">$2.4B</div>
                  <div className="text-green-400 text-sm">+12.4% this month</div>
                </div>
                <div className="bg-slate-800 rounded-lg p-4">
                  <div className="text-sm text-slate-400 mb-2">Active Funds</div>
                  <div className="text-2xl font-bold">127</div>
                  <div className="text-blue-400 text-sm">3 new this week</div>
                </div>
                <div className="bg-slate-800 rounded-lg p-4">
                  <div className="text-sm text-slate-400 mb-2">Processing Time</div>
                  <div className="text-2xl font-bold">2.3hrs</div>
                  <div className="text-green-400 text-sm">-85% with AI</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
