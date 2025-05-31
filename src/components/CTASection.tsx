
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

export const CTASection = () => {
  const benefits = [
    "14-day free trial",
    "No setup fees",
    "Cancel anytime",
    "Expert onboarding"
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 to-indigo-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Transform Your
          <br />
          Financial Operations?
        </h2>
        
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Join hundreds of leading financial institutions who have revolutionized 
          their fund administration with Logos' AI-powered platform.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center text-blue-100">
              <CheckCircle className="h-5 w-5 mr-2 text-green-400" />
              {benefit}
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-4 h-auto font-semibold">
            Start Free Trial
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 text-lg px-8 py-4 h-auto">
            Schedule Demo
          </Button>
        </div>

        <p className="text-sm text-blue-200 mt-6">
          Used by 500+ financial institutions • SOC 2 Type II Certified • Bank-grade security
        </p>
      </div>
    </section>
  );
};
