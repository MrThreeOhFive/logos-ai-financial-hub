
import { TrendingUp, Clock, Target, Users } from "lucide-react";

export const StatsSection = () => {
  const stats = [
    {
      icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
      value: "85%",
      label: "Reduction in Manual Processing",
      description: "Average time saved on routine tasks"
    },
    {
      icon: <Clock className="h-8 w-8 text-green-600" />,
      value: "2.3hrs",
      label: "Average Month-End Close",
      description: "Down from 2-3 days traditionally"
    },
    {
      icon: <Target className="h-8 w-8 text-purple-600" />,
      value: "99.9%",
      label: "Calculation Accuracy",
      description: "AI-verified financial computations"
    },
    {
      icon: <Users className="h-8 w-8 text-orange-600" />,
      value: "500+",
      label: "Financial Institutions",
      description: "Trust Logos for their operations"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group hover:scale-105 transition-transform duration-200">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-slate-50 rounded-full group-hover:bg-slate-100 transition-colors">
                  {stat.icon}
                </div>
              </div>
              <div className="text-4xl font-bold text-slate-900 mb-2">{stat.value}</div>
              <div className="text-lg font-semibold text-slate-700 mb-1">{stat.label}</div>
              <div className="text-sm text-slate-500">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
