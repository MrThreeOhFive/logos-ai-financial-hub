
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
              Institutional Power, Personalized for Your Legacy
              <ArrowRight className="w-4 h-4 ml-2" />
            </Badge>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
            Intelligent Wealth{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Command Center
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            The AI-powered financial platform built for family offices and private wealth management. 
            Consolidate complex assets, ensure privacy, and make informed decisions with institutional-grade technology.
          </p>

          {/* Key Benefits */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
            <div className="flex items-center text-slate-700">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              Bank-Grade Security
            </div>
            <div className="flex items-center text-slate-700">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
              Unified Asset View
            </div>
            <div className="flex items-center text-slate-700">
              <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
              AI-Driven Insights
            </div>
            <div className="flex items-center text-slate-700">
              <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
              Bespoke Reporting
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-lg px-8 py-4 h-auto">
              Request Private Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-auto border-slate-300 hover:bg-slate-50">
              <Play className="mr-2 h-5 w-5" />
              Schedule Personalized Demo
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col items-center space-y-4">
            <p className="text-sm text-slate-500">Trusted by leading family offices and private wealth managers</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {["Multi-Generational Families", "Single Family Offices", "Private Wealth Advisors", "Trust Companies", "Estate Planners"].map((client) => (
                <div key={client} className="text-slate-400 font-medium text-sm">
                  {client}
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
                <div className="text-sm text-slate-400">Family Office Dashboard</div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-slate-800 rounded-lg p-4">
                  <div className="text-sm text-slate-400 mb-2">Total Family Assets</div>
                  <div className="text-2xl font-bold">$847M</div>
                  <div className="text-green-400 text-sm">+8.2% YTD performance</div>
                </div>
                <div className="bg-slate-800 rounded-lg p-4">
                  <div className="text-sm text-slate-400 mb-2">Active Entities</div>
                  <div className="text-2xl font-bold">23</div>
                  <div className="text-blue-400 text-sm">Trusts, LPs & Holdings</div>
                </div>
                <div className="bg-slate-800 rounded-lg p-4">
                  <div className="text-sm text-slate-400 mb-2">Risk Score</div>
                  <div className="text-2xl font-bold">Low</div>
                  <div className="text-green-400 text-sm">AI-monitored</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
