
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Logos transformed our family office operations. We now have complete visibility across our complex asset structure and can generate customized reports for different family members in minutes, not days.",
      author: "Chief Investment Officer",
      title: "Multi-Generational Family Office",
      company: "$2.1B in Assets Under Management",
      rating: 5
    },
    {
      quote: "The AI-powered insights have been game-changing for our risk management. Logos proactively identifies potential issues and opportunities across our diverse investment portfolio before they become problems.",
      author: "Family Office Principal",
      title: "Single Family Office",
      company: "International Private Wealth",
      rating: 5
    },
    {
      quote: "Security and privacy were our top concerns. Logos exceeded our expectations with bank-grade security and granular access controls, giving us complete confidence in protecting our family's sensitive information.",
      author: "Chief Operating Officer",
      title: "Private Wealth Management Firm",
      company: "Serving 12 Ultra-HNW Families",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Trusted by <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Leading Family Offices</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            See how sophisticated family offices achieve operational excellence and enhanced stewardship with Logos
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                {/* Rating Stars */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                {/* Quote */}
                <blockquote className="text-slate-700 mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                
                {/* Author */}
                <div>
                  <div className="font-semibold text-slate-900">{testimonial.author}</div>
                  <div className="text-sm text-slate-600">{testimonial.title}</div>
                  <div className="text-sm text-blue-600 font-medium">{testimonial.company}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Metrics */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-slate-900">SOC 2</div>
              <div className="text-slate-600">Type II Certified</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900">256-bit</div>
              <div className="text-slate-600">Encryption Standard</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900">24/7</div>
              <div className="text-slate-600">Dedicated Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
