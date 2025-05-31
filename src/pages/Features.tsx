
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Brain, Shield, Zap, BarChart3, FileText, Settings, Database, TrendingUp, CheckCircle, ArrowRight, Users, Clock, Target } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Features = () => {
  const featureCategories = [
    {
      id: "data-management",
      title: "AI-Powered Data Aggregation & Management",
      icon: <Database className="h-8 w-8 text-blue-600" />,
      description: "Intelligent data extraction and normalization from diverse sources",
      badge: "AI Core",
      features: [
        {
          title: "Smart Data Extraction",
          description: "OCR and NLP automatically extract data from PDFs, emails, and spreadsheets",
          benefits: ["85% reduction in manual data entry", "99.9% accuracy rate", "Support for 50+ document formats"]
        },
        {
          title: "Automated Data Validation",
          description: "AI algorithms identify and correct inconsistencies during data ingestion",
          benefits: ["Real-time error detection", "Self-learning validation rules", "Automated data cleansing"]
        },
        {
          title: "Intelligent Source Mapping",
          description: "AI learns and suggests data field mappings for new sources",
          benefits: ["80% faster onboarding", "Reduced configuration errors", "Pattern recognition"]
        }
      ]
    },
    {
      id: "portfolio-accounting",
      title: "Advanced Portfolio Accounting",
      icon: <BarChart3 className="h-8 w-8 text-green-600" />,
      description: "Multi-currency accounting with automated corporate actions and real-time NAV",
      badge: "Core Platform",
      features: [
        {
          title: "Multi-Asset Support",
          description: "Handle equities, fixed income, derivatives, real estate, private equity, and digital assets",
          benefits: ["Universal asset class coverage", "Multi-currency support", "Real-time valuations"]
        },
        {
          title: "AI-Enhanced Corporate Actions",
          description: "NLP scans notices and suggests appropriate accounting treatments",
          benefits: ["Automated notice processing", "Predictive impact analysis", "Risk-free execution"]
        },
        {
          title: "Predictive Cash Reconciliation",
          description: "AI analyzes patterns to predict cash settlements and identify discrepancies",
          benefits: ["Faster reconciliation", "Proactive break detection", "Historical pattern analysis"]
        }
      ]
    },
    {
      id: "fund-administration",
      title: "Sophisticated Partnership Accounting & Fund Administration",
      icon: <Settings className="h-8 w-8 text-purple-600" />,
      description: "Complex waterfall distributions and comprehensive capital account management",
      badge: "Advanced",
      features: [
        {
          title: "AI-Assisted LPA Interpretation",
          description: "NLP parses Limited Partnership Agreements to set up waterfall models",
          benefits: ["Automated waterfall setup", "Reduced interpretation errors", "Compliance validation"]
        },
        {
          title: "Intelligent Fee Calculations",
          description: "AI independently calculates complex fee structures based on LPA terms",
          benefits: ["100% accuracy guarantee", "Automated verification", "Complex structure support"]
        },
        {
          title: "Smart Allocation Engine",
          description: "AI suggests equitable allocation methodologies for complex scenarios",
          benefits: ["Historical precedent analysis", "Compliance-aware suggestions", "Audit trail maintenance"]
        }
      ]
    },
    {
      id: "general-ledger",
      title: "Integrated General Ledger",
      icon: <FileText className="h-8 w-8 text-orange-600" />,
      description: "Multi-entity GL with automated journal entries and financial statements",
      badge: "Core Platform",
      features: [
        {
          title: "AI-Suggested Journal Entries",
          description: "Smart suggestions for GL accounts based on transaction patterns",
          benefits: ["Reduced manual input", "Consistent categorization", "Error prevention"]
        },
        {
          title: "Automated Intercompany Reconciliation",
          description: "AI identifies and matches intercompany transactions across entities",
          benefits: ["Seamless multi-entity support", "Automated matching", "Exception reporting"]
        },
        {
          title: "Financial Statement Generation",
          description: "Automated creation of trial balances and core financial statements",
          benefits: ["Real-time statements", "Customizable formats", "Regulatory compliance"]
        }
      ]
    },
    {
      id: "reporting-analytics",
      title: "Intelligent Reporting & Analytics",
      icon: <TrendingUp className="h-8 w-8 text-red-600" />,
      description: "Natural language queries and AI-generated commentary",
      badge: "AI Enhanced",
      features: [
        {
          title: "Natural Language Query (NLQ)",
          description: "Ask questions in plain English and get instant reports and visualizations",
          benefits: ["Instant report generation", "No technical training required", "Voice command support"]
        },
        {
          title: "AI-Generated Commentary",
          description: "Automated analysis and commentary for performance reports",
          benefits: ["Intelligent insights", "Time-saving automation", "Consistent narrative quality"]
        },
        {
          title: "Anomaly Detection",
          description: "AI scans reports for unusual figures and inconsistencies",
          benefits: ["Proactive error detection", "Quality assurance", "Risk mitigation"]
        }
      ]
    },
    {
      id: "compliance-risk",
      title: "Automated Compliance & Risk Management",
      icon: <Shield className="h-8 w-8 text-indigo-600" />,
      description: "Real-time monitoring with AI-enhanced compliance checking",
      badge: "Enterprise",
      features: [
        {
          title: "Real-Time Compliance Monitoring",
          description: "Continuous monitoring against investment guidelines and regulatory limits",
          benefits: ["Instant breach detection", "Automated alerts", "Regulatory reporting"]
        },
        {
          title: "Predictive Risk Analytics",
          description: "AI identifies emerging risk factors before they become critical",
          benefits: ["Early warning system", "Portfolio optimization", "Stress testing"]
        },
        {
          title: "Audit Trail Analysis",
          description: "AI-powered search and analysis of comprehensive audit trails",
          benefits: ["Rapid investigation", "Pattern recognition", "Compliance reporting"]
        }
      ]
    }
  ];

  const benefits = [
    {
      icon: <Clock className="h-6 w-6 text-blue-600" />,
      title: "85% Time Savings",
      description: "On routine operational tasks through intelligent automation"
    },
    {
      icon: <Target className="h-6 w-6 text-green-600" />,
      title: "99.9% Accuracy",
      description: "AI-verified calculations and data processing"
    },
    {
      icon: <Users className="h-6 w-6 text-purple-600" />,
      title: "500+ Institutions",
      description: "Trust Logos for their critical financial operations"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Platform <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Features</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              Discover how Logos revolutionizes financial operations with AI-powered automation, 
              intelligent insights, and comprehensive functionality designed for modern fund management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                Schedule Demo <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg">
                View Documentation
              </Button>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-sm">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-slate-50 rounded-full">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-slate-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {featureCategories.map((category, categoryIndex) => (
              <div key={category.id} className="relative">
                <div className="text-center mb-12">
                  <div className="flex items-center justify-center mb-6">
                    <div className="p-4 bg-white rounded-2xl shadow-lg">
                      {category.icon}
                    </div>
                    <Badge variant="secondary" className="ml-4">
                      {category.badge}
                    </Badge>
                  </div>
                  <h2 className="text-4xl font-bold text-slate-900 mb-4">
                    {category.title}
                  </h2>
                  <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                    {category.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {category.features.map((feature, featureIndex) => (
                    <Card key={featureIndex} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white hover:-translate-y-1">
                      <CardHeader>
                        <CardTitle className="text-xl font-bold text-slate-900 mb-2">
                          {feature.title}
                        </CardTitle>
                        <CardDescription className="text-slate-600 leading-relaxed">
                          {feature.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {feature.benefits.map((benefit, benefitIndex) => (
                            <div key={benefitIndex} className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-slate-700">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Advantage Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-md">
                <Brain className="h-12 w-12 text-white" />
              </div>
            </div>
            <h2 className="text-4xl font-bold mb-6">
              The AI Advantage
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Every feature in Logos is enhanced with artificial intelligence to automate routine tasks, 
              provide intelligent insights, and ensure accuracy at scale. Experience the future of financial operations.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Intelligent Automation",
                "Predictive Analytics", 
                "Natural Language Processing",
                "Machine Learning"
              ].map((tech, index) => (
                <div key={index} className="p-4 bg-white/10 rounded-lg backdrop-blur-md">
                  <span className="font-semibold text-white">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Ready to Transform Your Financial Operations?
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            See how Logos can streamline your workflows, enhance accuracy, and provide 
            intelligent insights for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
              Schedule Personalized Demo
            </Button>
            <Button variant="outline" size="lg">
              Download Feature Guide
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Features;
