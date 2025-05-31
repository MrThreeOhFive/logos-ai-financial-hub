
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { 
  BarChart3, 
  Database, 
  FileText, 
  Settings, 
  Users, 
  TrendingUp,
  AlertTriangle,
  Calendar,
  Shield,
  Home
} from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Data Management",
    items: [
      { title: "Data Sources Hub", url: "/data-sources", icon: Database },
      { title: "Import Center", url: "/data-import", icon: FileText },
      { title: "Validation & Reconciliation", url: "/data-validation", icon: Shield },
      { title: "Corporate Actions", url: "/corporate-actions", icon: Calendar },
    ]
  },
  {
    title: "Portfolio Management",
    items: [
      { title: "Portfolio Accounting", url: "/portfolio-accounting", icon: BarChart3 },
      { title: "Performance Analytics", url: "/performance", icon: TrendingUp },
      { title: "Risk Management", url: "/risk", icon: AlertTriangle },
    ]
  },
  {
    title: "Administration",
    items: [
      { title: "Fund Administration", url: "/fund-admin", icon: Users },
      { title: "Reporting", url: "/reporting", icon: FileText },
      { title: "Settings", url: "/settings", icon: Settings },
    ]
  }
];

export const DashboardSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader className="p-4">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">Λ</span>
          </div>
          <span className="text-xl font-bold text-slate-900">Logos</span>
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="/dashboard" className="flex items-center space-x-2">
                    <Home className="h-5 w-5" />
                    <span>Dashboard</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {menuItems.slice(1).map((section, index) => (
          <SidebarGroup key={index}>
            <SidebarGroupLabel>{section.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {section.items?.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url} className="flex items-center space-x-2">
                        <item.icon className="h-4 w-4" />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      
      <SidebarFooter className="p-4">
        <div className="text-xs text-slate-500">
          Logos AI Platform v2.1
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};
