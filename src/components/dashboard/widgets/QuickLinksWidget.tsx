
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText, Calculator, Users, BarChart3, Database } from "lucide-react";

export const QuickLinksWidget = () => {
  const quickLinks = [
    { title: "Generate NAV Report", icon: FileText, href: "/nav-report" },
    { title: "Portfolio Calculator", icon: Calculator, href: "/calculator" },
    { title: "Investor Portal", icon: Users, href: "/investors" },
    { title: "Performance Analytics", icon: BarChart3, href: "/analytics" },
    { title: "Data Import", icon: Database, href: "/data-import" },
    { title: "Fund Administration", icon: ExternalLink, href: "/fund-admin" }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <ExternalLink className="h-5 w-5 text-indigo-600" />
          <span>Quick Links</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3">
          {quickLinks.map((link, index) => (
            <Button
              key={index}
              variant="outline"
              className="h-auto p-3 flex flex-col items-center space-y-2 hover:bg-slate-50"
            >
              <link.icon className="h-5 w-5 text-slate-600" />
              <span className="text-xs text-center">{link.title}</span>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
