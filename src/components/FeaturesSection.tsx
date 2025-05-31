
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Shield, Zap, BarChart3, FileText, Settings, Database, TrendingUp } from "lucide-react";

export const FeaturesSection = () => {
  const features = [
    {
      icon: <Brain className="h-8 w-8 text-blue-600" />,
      title: "AI-Powered Data Processing",
      description: "Intelligent extraction and normalization from unstructured sources including PDFs, emails, and spreadsheets.",
      badge: "AI Core",
      capabilities: ["OCR & NLP Processing", "Smart Data Validation", "Automated Source Mapping"]
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-green-600" />,
      title: "Portfolio Accounting",
      description: "Multi-currency accounting with automated corporate actions and real-time NAV calculations.",
      badge: "Core",
      capabilities: ["Multi-Asset Support", "Real-time Valuations", "Cost Basis Tracking"]
    },
    {
      icon: <Settings className="h-8 w-8 text-purple-600" />,
      title: "Fund Administration",
      description: "Complex waterfall distributions, fee calculations, and comprehensive capital account management.",
      badge: "Advanced",
      capabilities: ["Waterfall Modeling", "Fee Automation", "Investor Registry"]
    },
    {
      icon: <FileText className="h-8 w-8 text-orange-600" />,
      title: "General Ledger",
      description: "Fully integrated multi-entity GL with automated journal entries and financial statement generation.",
      badge: "Core",
      capabilities: ["Multi-Entity Support", "Custom Chart of Accounts", "Financial Statements"]
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-red-600" />,
      title: "Reporting & Analytics",
      description: "Natural language queries and AI-generated commentary for comprehensive financial reporting.",
      badge: "AI Enhanced",
      capabilities: ["NLP Queries", "Custom Dashboards", "Performance Attribution"]
    },
    {
      icon: <Shield className="h-8 w-8 text-indigo-600" />,
      title: "Compliance & Risk",
      description: "Real-time monitoring with AI-enhanced compliance checking and predictive risk analytics.",
      badge: "Enterprise",
      capabilities: ["Real-time Monitoring", "Audit Trails", "Risk Analytics"]
    }
  ];

  return (
    <section id="features" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Platform <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Features</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive financial operations platform powered by artificial intelligence to streamline 
            every aspect of fund administration and portfolio management.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-slate-50 rounded-xl group-hover:bg-slate-100 transition-colors">
                    {feature.icon}
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-slate-900">
                  {feature.title}
                </CardTitle>
                <CardDescription className="text-slate-600 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {feature.capabilities.map((capability, capIndex) => (
                    <div key={capIndex} className="flex items-center text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3" />
                      {capability}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-slate-600 mb-6">Ready to transform your financial operations?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all">
              Schedule Demo
            </button>
            <button className="px-8 py-3 border border-slate-300 text-slate-700 font-semibold rounded-lg hover:bg-slate-50 transition-all">
              View Documentation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
