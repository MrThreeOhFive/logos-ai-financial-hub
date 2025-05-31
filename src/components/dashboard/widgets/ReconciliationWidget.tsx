
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, AlertCircle, CheckCircle, Clock } from "lucide-react";

export const ReconciliationWidget = () => {
  const reconciliationStats = {
    totalBreaks: 15,
    newBreaks: 3,
    oldestBreak: "5 days",
    resolvedToday: 8
  };

  const recentBreaks = [
    {
      id: "REC001",
      type: "Cash Break",
      fund: "Fund Alpha",
      amount: "$12,450",
      age: "2 days",
      priority: "high"
    },
    {
      id: "REC002", 
      type: "Position Break",
      fund: "Fund Beta",
      amount: "500 shares",
      age: "1 day",
      priority: "medium"
    },
    {
      id: "REC003",
      type: "Valuation Break",
      fund: "Fund Gamma",
      amount: "$8,200",
      age: "3 hours",
      priority: "low"
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-slate-100 text-slate-800';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Shield className="h-5 w-5 text-orange-600" />
            <span>Reconciliation</span>
          </div>
          <Badge className="bg-orange-100 text-orange-800">
            {reconciliationStats.totalBreaks} Breaks
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="text-center p-3 bg-red-50 rounded-lg">
            <div className="text-2xl font-bold text-red-600">{reconciliationStats.newBreaks}</div>
            <div className="text-xs text-red-700">New Today</div>
          </div>
          <div className="text-center p-3 bg-green-50 rounded-lg">
            <div className="text-2xl font-bold text-green-600">{reconciliationStats.resolvedToday}</div>
            <div className="text-xs text-green-700">Resolved Today</div>
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="text-sm font-medium text-slate-900">Recent Breaks</h4>
          {recentBreaks.map((breakItem) => (
            <div key={breakItem.id} className="p-2 border border-slate-200 rounded-lg hover:bg-slate-50">
              <div className="flex items-start justify-between mb-1">
                <div>
                  <p className="text-sm font-medium text-slate-900">{breakItem.type}</p>
                  <p className="text-xs text-slate-600">{breakItem.fund} • {breakItem.amount}</p>
                </div>
                <Badge className={getPriorityColor(breakItem.priority)}>
                  {breakItem.priority}
                </Badge>
              </div>
              <div className="flex items-center text-xs text-slate-500">
                <Clock className="h-3 w-3 mr-1" />
                Age: {breakItem.age}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 text-center">
          <button className="text-sm text-blue-600 hover:text-blue-800">View all breaks</button>
        </div>
      </CardContent>
    </Card>
  );
};
