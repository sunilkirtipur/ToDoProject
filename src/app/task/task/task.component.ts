import { Component, OnInit } from '@angular/core';
import { TaskService, Task } from './../service/task.service';

import { FileUploader } from 'ng2-file-upload';
import { environment } from './../../../environments/environment';

@Component({
	selector: 'app-movie',
	templateUrl: './task.component.html',
	styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

	public task: Task = new Task({});
	public tasks: any = [];

	uploading: boolean = false;

	constructor(
		public taskService: TaskService
	) { }

	ngOnInit() {
		this.getTasks();
	}

	getTasks() {
		this.taskService.list()
			.subscribe(tasks => {
				this.tasks = tasks;
			}, e => {
				console.log(e);
			})
	}

	submit() {

		if (this.task._id) {
			this.updateTask();
		} else {
			this.createTask();
		}

	}

	createTask() {
		this.taskService.create(this.task)
			.subscribe(task => {
				this.tasks.push(task);
				this.resetForm()
			}, e => {
				console.log(e);
			});
	}

	resetForm() {
		this.task = new Task({});
	}

	// remove(id: string, i) {
	// 	this.movieService.remove(id)
	// 		.subscribe(movie => {
	// 			this.movies.splice(i, 1);
	// 		}, e => {
	// 			console.log(e);
	// 		})
	// }

	// update(movie: any) {
	// 	this.movie = movie;
	// }

	updateTask() {
		// this.taskService.update(this.task)
		// 	.subscribe(movie => {
		// 		this.resetForm();
		// 		this.getMovies();
		// 	}, e => {
		// 		console.log(e);
		// 	})
	}
}
