export type TaskStatus = "Done" | "In Progress" | "To-do";

export type TaskIcon = {
  name: string;
  backgroundColor: string;
};

export type Task = {
  id: string;
  category: string;
  title: string;
  description: string;
  time: string;
  status: TaskStatus;
  icon: TaskIcon;
};

export const TASKS: Task[] = [
  {
    id: "1",
    category: "Grocery shopping app design",
    title: "Market Research",
    description: "Conduct a detailed analysis of target users, identify their pain points, and evaluate existing solutions in the grocery shopping space to uncover opportunities for innovation.",
    time: "10:00 AM",
    status: "Done",
    icon: { name: "grid", backgroundColor: "#FF6B8A" },
  },
  {
    id: "2",
    category: "Grocery shopping app design",
    title: "Competitive Analysis",
    description: "Analyze top competitors in the market, compare features, pricing, and user experience to identify strengths, weaknesses, and potential areas for differentiation.",
    time: "12:00 PM",
    status: "In Progress",
    icon: { name: "grid", backgroundColor: "#FF6B8A" },
  },
  {
    id: "3",
    category: "Uber Eats redesign challenge",
    title: "Create Low-fidelity Wireframe",
    description: "Create basic wireframes to map out user flows and screen layouts, focusing on functionality and usability before moving to high-fidelity designs.",
    time: "07:00 PM",
    status: "To-do",
    icon: { name: "arrow-down-circle", backgroundColor: "#4ADE80" },
  },
  {
    id: "4",
    category: "About design sprint",
    title: "How to pitch a Design Sprint",
    description: "Conduct a detailed analysis of target users, identify their pain points, and evaluate existing solutions in the grocery shopping space to uncover opportunities for innovation.",
    time: "09:00 PM",
    status: "To-do",
    icon: { name: "bookmark", backgroundColor: "#FBBF24" },
  },
  {
    id: "5",
    category: "Grocery shopping app design",
    title: "Market Research",
    description: "Conduct a detailed analysis of target users, identify their pain points, and evaluate existing solutions in the grocery shopping space to uncover opportunities for innovation.",
    time: "10:00 AM",
    status: "Done",
    icon: { name: "grid", backgroundColor: "#FF6B8A" },
  },
  {
    id: "6",
    category: "Grocery shopping app design",
    title: "Competitive Analysis",
    description: "Analyze top competitors in the market, compare features, pricing, and user experience to identify strengths, weaknesses, and potential areas for differentiation.",
    time: "12:00 PM",
    status: "In Progress",
    icon: { name: "grid", backgroundColor: "#FF6B8A" },
  },
  {
    id: "7",
    category: "Uber Eats redesign challenge",
    title: "Create Low-fidelity Wireframe",
    description: "Create basic wireframes to map out user flows and screen layouts, focusing on functionality and usability before moving to high-fidelity designs.",
    time: "07:00 PM",
    status: "To-do",
    icon: { name: "arrow-down-circle", backgroundColor: "#4ADE80" },
  },
  {
    id: "8",
    category: "About design sprint",
    title: "How to pitch a Design Sprint",
    description: "Conduct a detailed analysis of target users, identify their pain points, and evaluate existing solutions in the grocery shopping space to uncover opportunities for innovation.",
    time: "09:00 PM",
    status: "To-do",
    icon: { name: "bookmark", backgroundColor: "#FBBF24" },
  },
  {
    id: "9",
    category: "Grocery shopping app design",
    title: "Market Research",
    description: "Conduct a detailed analysis of target users, identify their pain points, and evaluate existing solutions in the grocery shopping space to uncover opportunities for innovation.",
    time: "10:00 AM",
    status: "Done",
    icon: { name: "grid", backgroundColor: "#FF6B8A" },
  },
  {
    id: "10",
    category: "Grocery shopping app design",
    title: "Competitive Analysis",
    description: "Analyze top competitors in the market, compare features, pricing, and user experience to identify strengths, weaknesses, and potential areas for differentiation.",
    time: "12:00 PM",
    status: "In Progress",
    icon: { name: "grid", backgroundColor: "#FF6B8A" },
  },
  {
    id: "11",
    category: "Uber Eats redesign challenge",
    title: "Create Low-fidelity Wireframe",
    description: "Create basic wireframes to map out user flows and screen layouts, focusing on functionality and usability before moving to high-fidelity designs.",
    time: "07:00 PM",
    status: "To-do",
    icon: { name: "arrow-down-circle", backgroundColor: "#4ADE80" },
  },
  {
    id: "12",
    category: "About design sprint",
    title: "How to pitch a Design Sprint",
    description: "Conduct a detailed analysis of target users, identify their pain points, and evaluate existing solutions in the grocery shopping space to uncover opportunities for innovation.",
    time: "09:00 PM",
    status: "To-do",
    icon: { name: "bookmark", backgroundColor: "#FBBF24" },
  },
];

export const FILTER_OPTIONS = [
  "All",
  "To do",
  "In Progress",
  "Completed",
] as const;

export type FilterOptions = (typeof FILTER_OPTIONS)[number];