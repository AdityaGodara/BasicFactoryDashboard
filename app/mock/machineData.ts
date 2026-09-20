export type MachineStatus =
  | "Running"
  | "Idle"
  | "Maintenance"
  | "Offline";

export interface Machine {
  id: string;
  name: string;
  type: string;
  status: MachineStatus;
  currentJobId: string | null;
}

export const mockMachines: Machine[] = [
  {
    id: "M-001",
    name: "CNC-01",
    type: "CNC Machine",
    status: "Running",
    currentJobId: "JOB-1001"
  },
  {
    id: "M-002",
    name: "CNC-02",
    type: "CNC Machine",
    status: "Idle",
    currentJobId: null
  },
  {
    id: "M-003",
    name: "CNC-03",
    type: "CNC Machine",
    status: "Running",
    currentJobId: "JOB-1014"
  },
  {
    id: "M-004",
    name: "CNC-04",
    type: "CNC Machine",
    status: "Running",
    currentJobId: "JOB-1017"
  },
  {
    id: "M-005",
    name: "CNC-05",
    type: "CNC Machine",
    status: "Idle",
    currentJobId: null
  },
  {
    id: "M-006",
    name: "CNC-06",
    type: "CNC Machine",
    status: "Running",
    currentJobId: "JOB-1010"
  },
  {
    id: "M-007",
    name: "CNC-07",
    type: "CNC Machine",
    status: "Running",
    currentJobId: "JOB-1014"
  },
  {
    id: "M-008",
    name: "MOLD-01",
    type: "Injection Molding",
    status: "Maintenance",
    currentJobId: "JOB-1003"
  },
  {
    id: "M-009",
    name: "MOLD-02",
    type: "Injection Molding",
    status: "Running",
    currentJobId: "JOB-1008"
  },
  {
    id: "M-010",
    name: "MOLD-03",
    type: "Injection Molding",
    status: "Maintenance",
    currentJobId: "JOB-1013"
  },
  {
    id: "M-011",
    name: "PRESS-01",
    type: "Hydraulic Press",
    status: "Running",
    currentJobId: "JOB-1007"
  },
  {
    id: "M-012",
    name: "PRESS-02",
    type: "Hydraulic Press",
    status: "Idle",
    currentJobId: null
  },
  {
    id: "M-013",
    name: "PRESS-03",
    type: "Hydraulic Press",
    status: "Running",
    currentJobId: "JOB-1004"
  },
  {
    id: "M-014",
    name: "PRESS-04",
    type: "Hydraulic Press",
    status: "Idle",
    currentJobId: null
  }
];