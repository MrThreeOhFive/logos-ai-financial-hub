
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

export const CTASection = () => {
  const benefits = ["Private consultation", "Customized demo", "Security assessment", "Implementation planning"];

  return (
    <section id="cta" className="py-24 bg-gradient-to-br from-blue-600 to-indigo-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Transform Your
          <br />
          Family Office Operations?
        </h2>
        
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Join sophisticated family offices who have revolutionized their wealth management 
          with Logos' AI-powered platform designed for privacy, precision, and peace of mind.
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
          <Button 
            size="lg" 
            className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-4 h-auto font-semibold"
            onClick={() => window.location.href = '/dashboard'}
          >
            Request Private Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-white px-8 py-4 h-auto bg-slate-50 text-blue-600 text-lg"
          >
            Download Family Office Guide
          </Button>
        </div>

        <p className="text-sm text-blue-200 mt-6">
          Trusted by 150+ family offices • SOC 2 Type II Certified • Bank-grade security & privacy
        </p>
      </div>
    </section>
  );
};
