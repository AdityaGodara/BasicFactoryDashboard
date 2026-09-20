'use client';
import { useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge";
import { mockJobs } from "@/app/mock/mockJobs"
import months from "@/app/mock/months"
import { ChevronLeft, ChevronRight, Search } from "lucide-react";

export default function JobsTable() {

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 7;

    const [statusFilter, setStatusFilter] = useState<string>("All");
    const [monthFilter, setMonthFilter] = useState<string>("All");
    const [machineSearch, setMachineSearch] = useState("");

    const filteredJobs = mockJobs.filter((job) => {
        if (
            statusFilter !== "All" &&
            job.status !== statusFilter
        ) { return false; }

        if (
            monthFilter !== "All" &&
            new Date(job.dueDate).getMonth() !== Number(monthFilter)
        ) { return false; }

        if (
            machineSearch &&
            !job.assignedMachine
                .toLowerCase()
                .includes(machineSearch.toLowerCase())
        ) { return false; }

        return true;
    });

    const totalPages = Math.ceil(filteredJobs.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;

    const currentJobs = filteredJobs.slice(
        startIndex,
        startIndex + itemsPerPage
    );

    return (
        <>
            <div className="flex gap-4 mb-4">
                <select
                    value={statusFilter}
                    onChange={(e) => {
                        setStatusFilter(e.target.value);
                        setCurrentPage(1);
                    }}
                    className="
        bg-[#111827]
        text-white
        border border-gray-700
        rounded-md
        px-3 py-2
        outline-none
        cursor-pointer
    "
                >
                    <option value="All" className="bg-[#111827] text-white">
                        All Statuses
                    </option>
                    <option value="Completed" className="bg-[#111827] text-white">
                        Completed
                    </option>
                    <option value="In Progress" className="bg-[#111827] text-white">
                        In Progress
                    </option>
                    <option value="Delayed" className="bg-[#111827] text-white">
                        Delayed
                    </option>
                    <option value="Pending" className="bg-[#111827] text-white">
                        Pending
                    </option>
                </select>

                <select
                    value={monthFilter}
                    onChange={(e) => {
                        setMonthFilter(e.target.value);
                        setCurrentPage(1);
                    }}
                    className="bg-[#111827] text-white border border-gray-700 rounded-md px-3 py-2 outline-none cursor-pointer"
                >
                    <option value="All">All Months</option>

                    {months.map((month, index) => (
                        <option key={index} value={index}>
                            {month}
                        </option>
                    ))}
                </select>
                <div className="flex items-center gap-2 bg-[#111827] text-white border border-gray-700 rounded-md px-3 py-2 outline-none">
                    <Search color="gray" />
                    <input
                        type="text"
                        placeholder="Search machine..."
                        value={machineSearch}
                        onChange={(e) => {
                            setMachineSearch(e.target.value);
                            setCurrentPage(1);
                        }}
                        className="bg-[#111827] text-white px-3 py-2 outline-none placeholder:text-gray-500"
                    />
                </div>
            </div>
            <div className="flex flex-col gap-4 align-center justify-center">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Job ID</TableHead>
                            <TableHead>Product Name</TableHead>
                            <TableHead>Customer Name</TableHead>
                            <TableHead>Quantity</TableHead>
                            <TableHead>Due Date</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Assigned Machine</TableHead>
                            <TableHead>Notes</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {currentJobs.map((job, key) => (
                            <TableRow key={key}>
                                <TableCell className="font-medium">{job.id}</TableCell>
                                <TableCell>{job.productName}</TableCell>
                                <TableCell>{job.customer}</TableCell>
                                <TableCell>{job.quantity}</TableCell>
                                <TableCell>{job.dueDate}</TableCell>
                                <TableCell>
                                    {job.status === "Completed" ? (
                                        <Badge className="bg-green-50 px-2 py-1 rounded-lg text-green-700 dark:bg-green-950 dark:text-green-300">
                                            Completed
                                        </Badge>
                                    ) : job.status === "In Progress" ? (
                                        <Badge className="bg-blue-50 px-2 py-1 rounded-lg text-blue-700 dark:bg-blue-950 dark:text-blue-300">
                                            In Progress
                                        </Badge>
                                    ) : job.status === "Delayed" ? (
                                        <Badge className="bg-red-50 px-2 py-1 rounded-lg text-red-700 dark:bg-red-950 dark:text-red-300">
                                            Delayed
                                        </Badge>
                                    ) : (
                                        <Badge className="bg-yellow-50 px-2 py-1 rounded-lg text-yellow-700 dark:bg-yellow-950 dark:text-yellow-300">
                                            Pending
                                        </Badge>
                                    )}
                                </TableCell>
                                <TableCell>{job.assignedMachine}</TableCell>
                                <TableCell>{job.notes}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <div className="flex gap-2 items-center justify-center mt-4">
                    <button
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage(currentPage - 1)}
                    >
                        <ChevronLeft />
                    </button>

                    <span>
                        Page {currentPage} of {totalPages}
                    </span>

                    <button
                        disabled={currentPage === totalPages}
                        onClick={() => setCurrentPage(currentPage + 1)}
                    >
                        <ChevronRight />
                    </button>
                </div>
            </div>
        </>
    )
}