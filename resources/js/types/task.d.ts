import { User } from ".";
import { Projects } from "./project";

interface Tasks {
  id: number;
  assigned_user_id: number;
  name: string;
  description: string;
  created_at: string;
  due_date: string;
  status: string;
  image: string;
  priority: string;
  project_id: string;
  project: Projects;
  assignedUser: User;
  createdBy: User;
  updatedBy: User;
}

export interface Links {
  url: string;
  active: boolean;
  label: string;
}

export interface Task {
  data: Tasks[];
  meta: { links: Links[] };
  links: {};
}
