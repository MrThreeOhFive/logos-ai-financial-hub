
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { DashboardGrid } from "@/components/dashboard/DashboardGrid";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>
            <p className="text-slate-600 mt-1">Welcome back, here's what's happening with your portfolios today.</p>
          </div>
          <div className="text-sm text-slate-500">
            Last updated: {new Date().toLocaleString()}
          </div>
        </div>
        
        <DashboardGrid />
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
