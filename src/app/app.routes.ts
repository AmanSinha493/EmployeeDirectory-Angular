import { Routes } from '@angular/router';
import { EmployeeContainerComponent } from './body-container/employee-container/employee-container.component';
import { RoleContainerComponent } from './body-container/role-container/role-container.component';
import { RoleDetailContainerComponent } from './body-container/role-detail-container/role-detail-container.component';
import { AddRoleComponent } from './roles/add-role/add-role.component';
import { LoginComponent } from './login/login.component';

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
        path:'roles/role-detail'
    },
    {
        component:AddRoleComponent,
        path:'roles/addRole'
    }
];
