
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, DollarSign, Users, BarChart3, Target } from "lucide-react";

export const KPIWidget = () => {
  const kpis = [
    {
      title: "Total AUM",
      value: "$2.4B",
      change: "+5.2%",
      changeType: "positive",
      icon: DollarSign,
      subtext: "vs last month"
    },
    {
      title: "Portfolio Performance",
      value: "+8.7%",
      change: "+1.2%",
      changeType: "positive",
      icon: TrendingUp,
      subtext: "YTD return"
    },
    {
      title: "Active Funds",
      value: "47",
      change: "+3",
      changeType: "positive",
      icon: BarChart3,
      subtext: "total funds"
    },
    {
      title: "Total Investors",
      value: "1,284",
      change: "+12",
      changeType: "positive",
      icon: Users,
      subtext: "across all funds"
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Target className="h-5 w-5 text-blue-600" />
          <span>Key Performance Indicators</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {kpis.map((kpi, index) => (
            <div key={index} className="p-4 bg-slate-50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <kpi.icon className="h-5 w-5 text-slate-600" />
                <span className={`text-sm font-medium ${
                  kpi.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {kpi.change}
                </span>
              </div>
              <div className="text-2xl font-bold text-slate-900 mb-1">{kpi.value}</div>
              <div className="text-sm text-slate-600">{kpi.title}</div>
              <div className="text-xs text-slate-500 mt-1">{kpi.subtext}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
