import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { TaskComponent } from './task/task.component';
import { TaskService } from './service/task.service';
import { FormsModule } from '@angular/forms';
import { FileUploadModule } from 'ng2-file-upload';

import { TaskRoutingModule } from './task.routing.module';
import { MaterialModule } from './../shared/material.module';

@NgModule({
	imports: [
		CommonModule,
		MaterialModule,
		FormsModule,
		TaskRoutingModule,
		HttpModule,
		FileUploadModule,
		FlexLayoutModule
	],
	declarations: [
		TaskComponent
	],	
	providers: [
		TaskService
	]
})
export class TaskModule { }
