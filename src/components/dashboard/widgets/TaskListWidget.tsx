
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, AlertCircle } from "lucide-react";

export const TaskListWidget = () => {
  const tasks = [
    {
      id: 1,
      title: "Approve NAV for Fund Alpha",
      priority: "high",
      dueDate: "Today",
      status: "pending"
    },
    {
      id: 2,
      title: "Review Reconciliation Breaks",
      priority: "medium",
      dueDate: "Tomorrow",
      status: "in-progress"
    },
    {
      id: 3,
      title: "Process Capital Call Notices",
      priority: "high",
      dueDate: "2 days",
      status: "pending"
    },
    {
      id: 4,
      title: "Update Investor Registry",
      priority: "low",
      dueDate: "Next week",
      status: "pending"
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
        <CardTitle className="flex items-center space-x-2">
          <CheckCircle className="h-5 w-5 text-blue-600" />
          <span>Pending Tasks</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {tasks.map((task) => (
            <div key={task.id} className="p-3 border border-slate-200 rounded-lg hover:bg-slate-50 cursor-pointer">
              <div className="flex items-start justify-between mb-2">
                <h4 className="text-sm font-medium text-slate-900">{task.title}</h4>
                <Badge className={getPriorityColor(task.priority)}>
                  {task.priority}
                </Badge>
              </div>
              <div className="flex items-center text-xs text-slate-500">
                <Clock className="h-3 w-3 mr-1" />
                Due: {task.dueDate}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 text-center">
          <button className="text-sm text-blue-600 hover:text-blue-800">View all tasks</button>
        </div>
      </CardContent>
    </Card>
  );
};
