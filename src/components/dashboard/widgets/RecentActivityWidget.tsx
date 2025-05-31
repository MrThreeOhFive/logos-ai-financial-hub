
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, CheckCircle, AlertCircle, Users, FileText } from "lucide-react";

export const RecentActivityWidget = () => {
  const activities = [
    {
      id: 1,
      action: "NAV finalized for Fund Alpha",
      user: "John Smith",
      time: "10 minutes ago",
      type: "success",
      icon: CheckCircle
    },
    {
      id: 2,
      action: "New investor onboarded to Fund Beta",
      user: "Sarah Johnson",
      time: "25 minutes ago",
      type: "info",
      icon: Users
    },
    {
      id: 3,
      action: "Monthly report generated for Fund Gamma",
      user: "Mike Chen",
      time: "1 hour ago",
      type: "info",
      icon: FileText
    },
    {
      id: 4,
      action: "Reconciliation break resolved",
      user: "Lisa Wang",
      time: "2 hours ago",
      type: "success",
      icon: CheckCircle
    },
    {
      id: 5,
      action: "Data validation error detected",
      user: "System",
      time: "3 hours ago",
      type: "warning",
      icon: AlertCircle
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'success': return 'text-green-500';
      case 'warning': return 'text-yellow-500';
      case 'info': return 'text-blue-500';
      default: return 'text-slate-500';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Activity className="h-5 w-5 text-purple-600" />
          <span>Recent Activity</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start space-x-3 p-2 hover:bg-slate-50 rounded-lg">
              <activity.icon className={`h-4 w-4 mt-1 ${getTypeColor(activity.type)}`} />
              <div className="flex-1">
                <p className="text-sm text-slate-900">{activity.action}</p>
                <div className="flex items-center space-x-2 text-xs text-slate-500 mt-1">
                  <span>by {activity.user}</span>
                  <span>•</span>
                  <span>{activity.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 text-center">
          <button className="text-sm text-blue-600 hover:text-blue-800">View full activity log</button>
        </div>
      </CardContent>
    </Card>
  );
};
