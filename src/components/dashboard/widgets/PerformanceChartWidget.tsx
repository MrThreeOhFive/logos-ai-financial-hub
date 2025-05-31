
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { TrendingUp } from "lucide-react";

export const PerformanceChartWidget = () => {
  const data = [
    { month: 'Jan', performance: 4.2 },
    { month: 'Feb', performance: 3.8 },
    { month: 'Mar', performance: 5.1 },
    { month: 'Apr', performance: 4.9 },
    { month: 'May', performance: 6.2 },
    { month: 'Jun', performance: 7.1 },
    { month: 'Jul', performance: 6.8 },
    { month: 'Aug', performance: 8.4 },
    { month: 'Sep', performance: 7.9 },
    { month: 'Oct', performance: 8.7 },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <TrendingUp className="h-5 w-5 text-green-600" />
          <span>Portfolio Performance (YTD)</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip 
                formatter={(value) => [`${value}%`, 'Performance']}
                labelFormatter={(label) => `Month: ${label}`}
              />
              <Line 
                type="monotone" 
                dataKey="performance" 
                stroke="#2563eb" 
                strokeWidth={2}
                dot={{ fill: '#2563eb', strokeWidth: 2, r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};
