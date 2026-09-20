import { ClipboardList } from "lucide-react";
import JobsTable from "../utility/jobs_table";

export default function WorkJobs() {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 text-foreground">
                <ClipboardList />
                <h2 className="text-xl font-semibold">Work Jobs</h2>
            </div>
            <div>
                <JobsTable />
            </div>
        </div>

    );
}