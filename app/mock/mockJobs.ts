export type JobStatus =
  | "Pending"
  | "In Progress"
  | "Delayed"
  | "Completed";

export interface Job {
  id: string;
  productName: string;
  customer: string;
  quantity: number;
  dueDate: string;
  status: JobStatus;
  assignedMachine: string;
  notes: string;
}

export const mockJobs: Job[] = [
  {
    id: "JOB-1001",
    productName: "Aluminium Housing",
    customer: "Bosch India",
    quantity: 1200,
    dueDate: "2026-09-19",
    status: "In Progress",
    assignedMachine: "CNC-01",
    notes: "Production running normally. 62% completed."
  },
  {
    id: "JOB-1002",
    productName: "Steel Mounting Bracket",
    customer: "Tata Motors",
    quantity: 850,
    dueDate: "2026-09-20",
    status: "Pending",
    assignedMachine: "CNC-02",
    notes: "Waiting for raw material to be loaded."
  },
  {
    id: "JOB-1003",
    productName: "Plastic Gear Assembly",
    customer: "Maruti Suzuki",
    quantity: 2500,
    dueDate: "2026-09-18",
    status: "In Progress",
    assignedMachine: "MOLD-01",
    notes: "Machine stopped for maintenance. Expected restart by 4 PM."
  },
  {
    id: "JOB-1004",
    productName: "Copper Connector",
    customer: "Siemens India",
    quantity: 3200,
    dueDate: "2026-09-21",
    status: "In Progress",
    assignedMachine: "PRESS-03",
    notes: "Production is on schedule."
  },
  {
    id: "JOB-1005",
    productName: "Motor End Cover",
    customer: "ABB India",
    quantity: 600,
    dueDate: "2026-09-17",
    status: "Completed",
    assignedMachine: "CNC-03",
    notes: "Completed and moved to quality inspection."
  },
  {
    id: "JOB-1006",
    productName: "Hydraulic Valve Body",
    customer: "L&T Engineering",
    quantity: 430,
    dueDate: "2026-09-22",
    status: "Pending",
    assignedMachine: "CNC-04",
    notes: "Production scheduled for tomorrow morning."
  },
  {
    id: "JOB-1007",
    productName: "Stainless Steel Clamp",
    customer: "Honeywell",
    quantity: 1750,
    dueDate: "2026-09-19",
    status: "Delayed",
    assignedMachine: "PRESS-01",
    notes: "Tooling issue causing slower production than expected."
  },
  {
    id: "JOB-1008",
    productName: "Electrical Junction Box",
    customer: "Schneider Electric",
    quantity: 900,
    dueDate: "2026-09-23",
    status: "In Progress",
    assignedMachine: "MOLD-02",
    notes: "Approximately 35% completed."
  },
  {
    id: "JOB-1009",
    productName: "Precision Shaft",
    customer: "Hero MotoCorp",
    quantity: 1100,
    dueDate: "2026-09-24",
    status: "Pending",
    assignedMachine: "CNC-05",
    notes: "Material inspection completed. Ready for production."
  },
  {
    id: "JOB-1010",
    productName: "Brake Caliper Housing",
    customer: "Bharat Forge",
    quantity: 720,
    dueDate: "2026-09-20",
    status: "In Progress",
    assignedMachine: "CNC-06",
    notes: "Production proceeding normally."
  },
  {
    id: "JOB-1011",
    productName: "Fan Motor Bracket",
    customer: "Voltas",
    quantity: 1400,
    dueDate: "2026-09-16",
    status: "Completed",
    assignedMachine: "PRESS-02",
    notes: "Order completed and dispatched to warehouse."
  },
  {
    id: "JOB-1012",
    productName: "Gearbox Cover",
    customer: "Ashok Leyland",
    quantity: 550,
    dueDate: "2026-09-25",
    status: "Pending",
    assignedMachine: "CNC-02",
    notes: "Production slot confirmed."
  },
  {
    id: "JOB-1013",
    productName: "Injection Molded Panel",
    customer: "LG Electronics",
    quantity: 3000,
    dueDate: "2026-09-19",
    status: "Delayed",
    assignedMachine: "MOLD-03",
    notes: "Cooling system temperature is above the normal range."
  },
  {
    id: "JOB-1014",
    productName: "Bearing Housing",
    customer: "SKF India",
    quantity: 980,
    dueDate: "2026-09-26",
    status: "In Progress",
    assignedMachine: "CNC-07",
    notes: "Production is 48% complete."
  },
  {
    id: "JOB-1015",
    productName: "Aluminium Support Frame",
    customer: "Denso India",
    quantity: 670,
    dueDate: "2026-09-27",
    status: "Pending",
    assignedMachine: "CNC-01",
    notes: "Awaiting production start."
  },
  {
    id: "JOB-1016",
    productName: "Control Panel Enclosure",
    customer: "Honeywell",
    quantity: 420,
    dueDate: "2026-09-15",
    status: "Completed",
    assignedMachine: "PRESS-04",
    notes: "Completed and passed final quality inspection."
  },
  {
    id: "JOB-1017",
    productName: "Transmission Mount",
    customer: "Mahindra & Mahindra",
    quantity: 1250,
    dueDate: "2026-09-21",
    status: "In Progress",
    assignedMachine: "CNC-04",
    notes: "Minor surface finish issue detected on first batch."
  },
  {
    id: "JOB-1018",
    productName: "Polycarbonate Cover",
    customer: "Panasonic India",
    quantity: 2100,
    dueDate: "2026-09-28",
    status: "Pending",
    assignedMachine: "MOLD-02",
    notes: "Raw material available. Production scheduled for next week."
  }
];