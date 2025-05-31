
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Building2, TrendingUp, Users, Shield, ArrowRight, CheckCircle, Star } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Solutions = () => {
  const solutionsByRole = [
    {
      icon: <Building2 className="h-8 w-8 text-blue-600" />,
      title: "Logos for Fund Administrators",
      description: "Efficiency in client servicing, multi-fund management, and operational scale",
      benefits: [
        "Multi-fund management capabilities",
        "Automated reporting workflows",
        "Scalable client servicing",
        "Streamlined operations"
      ],
      cta: "Explore Fund Admin Solutions"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-green-600" />,
      title: "Logos for Hedge Funds",
      description: "Support for complex strategies, real-time P&L, and investor transparency",
      benefits: [
        "Complex strategy support",
        "Real-time P&L tracking",
        "Shadow accounting capabilities",
        "Enhanced investor transparency"
      ],
      cta: "Discover Hedge Fund Features"
    },
    {
      icon: <Users className="h-8 w-8 text-purple-600" />,
      title: "Logos for Private Equity",
      description: "LPA modeling, waterfall calculations, and investor lifecycle tracking",
      benefits: [
        "Advanced LPA modeling",
        "Automated waterfall calculations",
        "Capital call/distribution management",
        "Complete investor lifecycle tracking"
      ],
      cta: "View PE Solutions"
    },
    {
      icon: <Shield className="h-8 w-8 text-indigo-600" />,
      title: "Logos for Family Offices",
      description: "Consolidated reporting, diverse asset support, and bespoke solutions",
      benefits: [
        "Consolidated asset reporting",
        "Alternative investment support",
        "Privacy-focused architecture",
        "Bespoke reporting capabilities"
      ],
      cta: "Learn About Family Office Features"
    }
  ];

  const solutionsByChallenge = [
    {
      title: "Automate Complex Financial Workflows",
      description: "Streamline NAV calculation, investor onboarding, and month-end close processes",
      outcome: "Reduce Operational Risk"
    },
    {
      title: "Achieve Unparalleled Reporting Efficiency",
      description: "Transform report generation with AI-powered insights and natural language queries",
      outcome: "Increase Team Productivity"
    },
    {
      title: "Master Data Complexity",
      description: "Handle diverse data sources with intelligent extraction and validation",
      outcome: "Enhance Data Integrity"
    },
    {
      title: "Navigate Regulatory Demands with Confidence",
      description: "Automated compliance monitoring and real-time regulatory checks",
      outcome: "Scale Your Operations"
    }
  ];

  const testimonials = [
    {
      quote: "Logos transformed our month-end process from 5 days to 2 days, giving us more time to focus on analysis rather than data gathering.",
      author: "Sarah Chen",
      role: "CFO, Meridian Capital",
      rating: 5
    },
    {
      quote: "The AI-powered reconciliation features have reduced our manual errors by 95% and significantly improved our audit readiness.",
      author: "Michael Rodriguez",
      role: "Fund Administrator, Alpine Partners",
      rating: 5
    },
    {
      quote: "Finally, a platform that understands the complexity of private equity operations. The waterfall modeling is exceptional.",
      author: "Jennifer Walsh",
      role: "Operations Director, Summit Equity",
      rating: 5
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
              Tailored <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Solutions</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              Discover how Logos solves specific business challenges and meets the unique needs 
              of different segments within the financial industry.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions by Role/Industry */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Solutions by Industry
            </h2>
            <p className="text-xl text-slate-600">
              Specialized capabilities designed for your unique operational needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutionsByRole.map((solution, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-slate-50 rounded-xl group-hover:bg-slate-100 transition-colors">
                      {solution.icon}
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-bold text-slate-900 mb-2">
                    {solution.title}
                  </CardTitle>
                  <CardDescription className="text-slate-600 leading-relaxed">
                    {solution.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {solution.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-slate-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    {solution.cta} <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions by Challenge */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Solutions by Challenge
            </h2>
            <p className="text-xl text-slate-600">
              Address your most pressing operational challenges with intelligent automation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutionsByChallenge.map((challenge, index) => (
              <div key={index} className="p-6 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{challenge.title}</h3>
                <p className="text-slate-600 mb-4">{challenge.description}</p>
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  Outcome: {challenge.outcome}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Client Success Stories
            </h2>
            <p className="text-xl text-slate-600">
              Real results from organizations transforming their operations with Logos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-slate-700 mb-4 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <div className="font-semibold text-slate-900">{testimonial.author}</div>
                    <div className="text-sm text-slate-600">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how Logos can solve your specific challenges and deliver 
            measurable results for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-slate-100">
              Request Personalized Demo
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
              Speak to a Solutions Expert
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Solutions;
