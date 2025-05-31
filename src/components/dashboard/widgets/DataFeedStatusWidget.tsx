
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Database, CheckCircle, XCircle, AlertCircle } from "lucide-react";

export const DataFeedStatusWidget = () => {
  const dataFeeds = [
    { name: "JP Morgan Custody", status: "connected", lastSync: "5 min ago" },
    { name: "Bloomberg Market Data", status: "connected", lastSync: "2 min ago" },
    { name: "Refinitiv FX Rates", status: "connected", lastSync: "1 min ago" },
    { name: "Prime Broker A", status: "error", lastSync: "2 hours ago" },
    { name: "Administrator B", status: "warning", lastSync: "30 min ago" }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'connected': return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'error': return <XCircle className="h-4 w-4 text-red-500" />;
      case 'warning': return <AlertCircle className="h-4 w-4 text-yellow-500" />;
      default: return <AlertCircle className="h-4 w-4 text-slate-500" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'connected': return <Badge className="bg-green-100 text-green-800">Active</Badge>;
      case 'error': return <Badge className="bg-red-100 text-red-800">Error</Badge>;
      case 'warning': return <Badge className="bg-yellow-100 text-yellow-800">Warning</Badge>;
      default: return <Badge className="bg-slate-100 text-slate-800">Unknown</Badge>;
    }
  };

  const connectedCount = dataFeeds.filter(feed => feed.status === 'connected').length;
  const totalCount = dataFeeds.length;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Database className="h-5 w-5 text-blue-600" />
            <span>Data Feed Status</span>
          </div>
          <Badge className="bg-blue-100 text-blue-800">
            {connectedCount}/{totalCount} Active
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {dataFeeds.map((feed, index) => (
            <div key={index} className="flex items-center justify-between p-2 hover:bg-slate-50 rounded-lg">
              <div className="flex items-center space-x-3">
                {getStatusIcon(feed.status)}
                <div>
                  <p className="text-sm font-medium text-slate-900">{feed.name}</p>
                  <p className="text-xs text-slate-500">Last sync: {feed.lastSync}</p>
                </div>
              </div>
              {getStatusBadge(feed.status)}
            </div>
          ))}
        </div>
        <div className="mt-4 text-center">
          <button className="text-sm text-blue-600 hover:text-blue-800">Manage data sources</button>
        </div>
      </CardContent>
    </Card>
  );
};
