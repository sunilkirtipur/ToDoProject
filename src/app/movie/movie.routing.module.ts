import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MovieComponent } from './movie/movie.component';

import { AuthGuard } from './../auth/services/guard.service';


const routes: Routes = [

    {
        path: 'movie-list',
        component: MovieComponent,
        canActivate: [AuthGuard]
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MovieRoutingModule { }