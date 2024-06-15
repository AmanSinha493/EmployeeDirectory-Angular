import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));



document.addEventListener("DOMContentLoaded", async function () {
    // async function employeeRowsJson() {
    //     try {
    //         if (!sessionStorage.getItem('employeesTableDetail')) {
    //             const response = await fetch("./public/json/employeesDetails.json");
    //             var employeeList = await response.json();
    //             for (let i = 0; i < employeeList.length; i++) {
    //                 storage.saveToSessionStorage(employeeList[i]);
    //             }
    //             window.location.reload();
    //             storage.resetFilterStorage();
    //         }
    //     } catch (error) {
    //         console.error("Error fetching JSON:", error);
    //     }
    // }
    
    // let input = document.querySelectorAll('.filter-options-container input') as NodeListOf<HTMLInputElement>;
    // for (let i = 0; i < input.length; i++) {
    //     let select = input[i].parentNode! as HTMLElement;
    //     select.addEventListener('click', employeeTable.selectFilter)
    // }
});