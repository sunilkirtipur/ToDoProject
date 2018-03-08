import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MovieComponent } from './movie/movie.component';
import { MovieService } from './service/movie.service';
import { FormsModule } from '@angular/forms';
import { FileUploadModule } from 'ng2-file-upload';

import { MovieRoutingModule } from './movie.routing.module';
import { MaterialModule } from './../shared/material.module';

@NgModule({
	imports: [
		CommonModule,
		MaterialModule,
		FormsModule,
		MovieRoutingModule,
		HttpModule,
		FileUploadModule,
		FlexLayoutModule
	],
	declarations: [
		MovieComponent
	],	
	providers: [
		MovieService
	]
})
export class MovieModule { }
