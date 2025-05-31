
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Logos has transformed our fund administration. What used to take days now takes hours, and the AI-powered insights have elevated our entire operation.",
      author: "Sarah Chen",
      title: "COO",
      company: "Meridian Capital Partners",
      rating: 5
    },
    {
      quote: "The automated data extraction alone has saved us 40+ hours per month. The platform's intelligence continues to amaze our team.",
      author: "Michael Rodriguez",
      title: "Fund Administrator",
      company: "Atlas Family Office",
      rating: 5
    },
    {
      quote: "Finally, a platform that understands the complexities of private equity accounting. The waterfall calculations are flawless.",
      author: "Jennifer Park",
      title: "Investment Accountant",
      company: "Pinnacle Ventures",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Trusted by <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Industry Leaders</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            See how financial professionals are revolutionizing their operations with Logos
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
              <div className="text-3xl font-bold text-slate-900">4.9/5</div>
              <div className="text-slate-600">Customer Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900">99.9%</div>
              <div className="text-slate-600">Uptime Guarantee</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900">24/7</div>
              <div className="text-slate-600">Enterprise Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
