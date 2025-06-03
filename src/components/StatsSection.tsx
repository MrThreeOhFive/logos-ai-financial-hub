
import { TrendingUp, Clock, Target, Users } from "lucide-react";

export const StatsSection = () => {
  const stats = [
    {
      icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
      value: "92%",
      label: "Operational Efficiency Gain",
      description: "Average time saved on family office tasks"
    },
    {
      icon: <Clock className="h-8 w-8 text-green-600" />,
      value: "1.5hrs",
      label: "Monthly Reporting Time",
      description: "Down from 3-5 days traditionally"
    },
    {
      icon: <Target className="h-8 w-8 text-purple-600" />,
      value: "99.9%",
      label: "Data Accuracy & Security",
      description: "Bank-grade protection & precision"
    },
    {
      icon: <Users className="h-8 w-8 text-orange-600" />,
      value: "150+",
      label: "Family Offices Served",
      description: "Trust Logos for their wealth management"
    }
  ];

  return (
    <section id="stats" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Proven Results for Family Offices
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Discover how leading family offices achieve operational excellence and peace of mind with Logos
          </p>
        </div>
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
