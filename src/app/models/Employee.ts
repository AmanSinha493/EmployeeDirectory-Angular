import { Department } from "./Department";
import { Project } from "./Project";
import { Location } from "./Location";
  export interface Employee {
    id: string;
    name: string;
    email: string;
    profileImage:string;
    joiningDate: string;
    department: Department;
    role: string;
    roleID: string;
    location: Location;
    mobileNo: string;
    status:string;
    dob: string;
    manager: string;
    project: Project;
  }
  