import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TaskComponent } from './task/task.component';

import { AuthGuard } from './../auth/services/guard.service';


const routes: Routes = [

    {
        path: 'task-list',
        component: TaskComponent,
        canActivate: [AuthGuard]
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TaskRoutingModule { }