import KPICard from "@/components/utility/kpi-card"
import { BriefcaseBusiness, Check, ClockAlert, ClockArrowDown, Pickaxe } from "lucide-react"
import { Job, mockJobs } from "@/app/mock/mockJobs"

export default function KPISection() {

    const getDueSoonJobs = (jobs: Job[]) => {
        const today = new Date();
        const threeDaysFromNow = new Date(today);
        threeDaysFromNow.setDate(today.getDate() + 3);

        return jobs.filter((job) => {
            const dueDate = new Date(job.dueDate);

            return dueDate >= today && dueDate <= threeDaysFromNow;
        });
    }

    return (
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <KPICard title="Total Jobs" value={mockJobs.length} icon={<BriefcaseBusiness />} />
            <KPICard title="Delayed Jobs" value={mockJobs.filter(job => job.status.toLowerCase() === "delayed").length} icon={<ClockAlert />} />
            <KPICard title="Due Soon" value={getDueSoonJobs(mockJobs).length} icon={<ClockArrowDown />} />
            <KPICard title="Completed Jobs" value={mockJobs.filter(job => job.status.toLowerCase() === "completed").length} icon={<Check />} />
            <KPICard title="In-Progress Jobs" value={mockJobs.filter(job => job.status === "In Progress").length} icon={<Pickaxe />} />
        </div>
    )
}