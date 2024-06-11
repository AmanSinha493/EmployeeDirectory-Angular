import { Department } from "./Department";
import { Location } from "./Location";

export interface Role {
    id: string;
    name: string;
    department: Department;
    location: Location;
    description: string;
  }