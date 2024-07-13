import { User } from ".";

interface Projects {
  id: number;
  name: string;
  description: string;
  created_at: string;
  due_date: string;
  status: string;
  image: string;
  createdBy: User;
  updatedBy: User;
}

export interface Links {
  url: string;
  active: boolean;
  label: string;
}

export interface Project {
  data: Projects[];
  meta: { links: Links[] };
  links: {};
}
