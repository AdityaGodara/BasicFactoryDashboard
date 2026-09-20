import Navbar from "@/components/navbar";
import KPISection from "@/components/layout/kpi_section";
import WorkJobs from "@/components/layout/work_jobs";

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Navbar />
      <div className="p-10 flex flex-col gap-10">
        <KPISection />
        <WorkJobs />
      </div>
    </div>
  )
}
