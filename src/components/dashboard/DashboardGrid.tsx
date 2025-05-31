
import { KPIWidget } from "./widgets/KPIWidget";
import { TaskListWidget } from "./widgets/TaskListWidget";
import { AlertsWidget } from "./widgets/AlertsWidget";
import { PerformanceChartWidget } from "./widgets/PerformanceChartWidget";
import { RecentActivityWidget } from "./widgets/RecentActivityWidget";
import { QuickLinksWidget } from "./widgets/QuickLinksWidget";
import { DataFeedStatusWidget } from "./widgets/DataFeedStatusWidget";
import { ReconciliationWidget } from "./widgets/ReconciliationWidget";

export const DashboardGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {/* Top row - KPIs */}
      <div className="xl:col-span-4 lg:col-span-3 md:col-span-2">
        <KPIWidget />
      </div>
      
      {/* Second row */}
      <div className="lg:col-span-2 md:col-span-2">
        <PerformanceChartWidget />
      </div>
      <div className="lg:col-span-1">
        <TaskListWidget />
      </div>
      <div className="lg:col-span-1">
        <AlertsWidget />
      </div>
      
      {/* Third row */}
      <div className="lg:col-span-2 md:col-span-2">
        <RecentActivityWidget />
      </div>
      <div className="lg:col-span-1">
        <DataFeedStatusWidget />
      </div>
      <div className="lg:col-span-1">
        <ReconciliationWidget />
      </div>
      
      {/* Fourth row */}
      <div className="lg:col-span-2 md:col-span-2">
        <QuickLinksWidget />
      </div>
    </div>
  );
};
