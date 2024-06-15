import { Routes } from '@angular/router';
import { EmployeeContainerComponent } from './components/employee/employee-container/employee-container.component';
import { RoleContainerComponent } from './components/roles/role-container/role-container.component';
import { RoleDetailContainerComponent } from './components/roles/role-detail-container/role-detail-container.component';
import { AddRoleComponent } from './components/roles/add-role/add-role.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
    {
        component:LoginComponent,
        path:'',
        // children:[{
        //     component:FilterBarComponent,
        // },
    // ]
    },
    {
        component:EmployeeContainerComponent,
        path:'employee'
    },
    {
        component:RoleContainerComponent,
        path:'roles'
    },
    {
        component:RoleDetailContainerComponent,
        path:'roles/:id'
    },
    {
        component:AddRoleComponent,
        path:'addRole'
    }
];
