
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Star, Users, Database, Zap } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Pricing = () => {
  const pricingTiers = [
    {
      name: "Essentials",
      description: "Perfect for smaller funds and family offices getting started",
      badge: "Most Popular",
      icon: <Users className="h-8 w-8 text-blue-600" />,
      features: [
        "Core portfolio accounting",
        "Basic reporting & analytics",
        "Standard data integrations",
        "Email support",
        "Up to 5 users",
        "Basic AI-powered data extraction"
      ],
      limitations: [
        "Limited to 10 funds/entities",
        "Standard reconciliation tools",
        "Basic compliance monitoring"
      ],
      cta: "Start with Essentials"
    },
    {
      name: "Professional",
      description: "Advanced features for growing organizations with complex needs",
      badge: "Best Value",
      icon: <Database className="h-8 w-8 text-green-600" />,
      features: [
        "Everything in Essentials",
        "Advanced partnership accounting",
        "Waterfall modeling & calculations",
        "AI-enhanced compliance monitoring",
        "Custom reporting templates",
        "API access",
        "Up to 25 users",
        "Natural Language Query (NLQ)",
        "Predictive analytics"
      ],
      limitations: [
        "Limited to 50 funds/entities",
        "Standard SLA support"
      ],
      cta: "Upgrade to Professional"
    },
    {
      name: "Enterprise",
      description: "Full-scale solution for large institutions and fund administrators",
      badge: "Complete Solution",
      icon: <Zap className="h-8 w-8 text-purple-600" />,
      features: [
        "Everything in Professional",
        "Unlimited funds/entities",
        "Advanced AI features & automation",
        "Custom integrations & workflows",
        "Dedicated success manager",
        "Priority support (24/7)",
        "Unlimited users",
        "Advanced audit & compliance tools",
        "White-label options",
        "Custom training & onboarding"
      ],
      limitations: [],
      cta: "Contact Enterprise Sales"
    }
  ];

  const pricingFactors = [
    {
      icon: <Database className="h-6 w-6 text-blue-600" />,
      title: "Assets Under Management (AUM)",
      description: "Pricing scales with your total assets under management"
    },
    {
      icon: <Users className="h-6 w-6 text-green-600" />,
      title: "Number of Users",
      description: "Concurrent users accessing the platform"
    },
    {
      icon: <Star className="h-6 w-6 text-purple-600" />,
      title: "Specific Modules",
      description: "Advanced features and specialized functionality"
    }
  ];

  const faqs = [
    {
      question: "What's included in the base pricing?",
      answer: "All plans include implementation support, standard training, regular product updates, and access to our customer success team."
    },
    {
      question: "Are there any setup or implementation fees?",
      answer: "Implementation is included in your subscription. For complex migrations or custom integrations, additional professional services may apply."
    },
    {
      question: "Can I upgrade or downgrade my plan?",
      answer: "Yes, you can change your plan at any time. Upgrades take effect immediately, while downgrades apply at your next billing cycle."
    },
    {
      question: "What kind of support is provided?",
      answer: "All plans include access to our support team. Professional plans include priority support, and Enterprise includes dedicated success management."
    },
    {
      question: "How does the AI pricing work?",
      answer: "AI features are included in your plan tier. More advanced AI capabilities and higher usage limits are available in higher tiers."
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
              Simple, Transparent <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Pricing</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              Choose the plan that fits your organization's needs. All plans include our core 
              AI-powered features with transparent pricing and no hidden fees.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <Card key={index} className={`relative group hover:shadow-xl transition-all duration-300 border-0 bg-white hover:-translate-y-1 ${index === 1 ? 'ring-2 ring-blue-600' : ''}`}>
                {tier.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className={`${index === 1 ? 'bg-blue-600' : 'bg-slate-600'} text-white`}>
                      {tier.badge}
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-slate-50 rounded-xl group-hover:bg-slate-100 transition-colors">
                      {tier.icon}
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-bold text-slate-900">
                    {tier.name}
                  </CardTitle>
                  <CardDescription className="text-slate-600">
                    {tier.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">Included Features:</h4>
                      <div className="space-y-2">
                        {tier.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-slate-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {tier.limitations.length > 0 && (
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2">Plan Limits:</h4>
                        <div className="space-y-2">
                          {tier.limitations.map((limitation, limitIndex) => (
                            <div key={limitIndex} className="flex items-start">
                              <div className="w-2 h-2 bg-slate-400 rounded-full mr-3 mt-2 flex-shrink-0" />
                              <span className="text-sm text-slate-600">{limitation}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <Button 
                    className={`w-full ${index === 1 ? 'bg-blue-600 hover:bg-blue-700' : 'bg-slate-600 hover:bg-slate-700'}`}
                  >
                    {tier.cta} <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Philosophy */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Our Pricing Philosophy
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            We believe in transparent, value-based pricing that scales with your success. 
            Our AI-powered platform delivers measurable time savings, risk reduction, and 
            operational efficiency that far exceeds the investment.
          </p>
          <div className="bg-slate-50 rounded-xl p-6">
            <p className="text-slate-700 italic">
              "Logos typically pays for itself within the first quarter through time savings 
              and error reduction alone. The operational efficiency gains compound over time."
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Factors */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              How Pricing is Determined
            </h2>
            <p className="text-lg text-slate-600">
              Several factors influence your final pricing to ensure you get the best value
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingFactors.map((factor, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-sm">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-slate-50 rounded-full">
                    {factor.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{factor.title}</h3>
                <p className="text-slate-600">{factor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-slate-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{faq.question}</h3>
                <p className="text-slate-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Schedule a consultation to discuss your specific needs and get a customized quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-slate-100">
              Request Custom Quote
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
