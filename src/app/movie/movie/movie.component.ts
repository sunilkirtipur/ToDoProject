import { Component, OnInit } from '@angular/core';
import { MovieService, Movie } from './../service/movie.service';

import { FileUploader } from 'ng2-file-upload';
import { environment } from './../../../environments/environment';

@Component({
	selector: 'app-movie',
	templateUrl: './movie.component.html',
	styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

	public staticUrl: string = environment.staticUrl;
	public uploader: FileUploader = new FileUploader({ url: environment.baseUrl + '/file/movie-poster' });


	public movie: Movie = new Movie({});
	public movies: any = [];

	uploading: boolean = false;

	constructor(
		public movieService: MovieService
	) { }

	ngOnInit() {
		this.getMovies();

		this.uploader.onErrorItem = (item: any, response: string, status: number, headers): any => {
			// this.notifyService.showFileUploadError(response);
		}

		this.uploader.onProgressItem = (file) => {
			this.uploading = true;
		};

		this.uploader.onAfterAddingFile = (file) => {
			if (this.uploader.queue.length > 1) {
				this.uploader.queue.splice(0, 1);
			}
			file.withCredentials = false;
		};

		this.uploader.onSuccessItem = (item: any, response: any, status: any, headers: any) => {
			let res = JSON.parse(response);
			this.movie.poster = res.filename;
			console.log("ImageUpload:uploaded:", item, status, response);

		};
	}

	getMovies() {
		this.movieService.list()
			.subscribe(movies => {
				this.movies = movies;
			}, e => {
				console.log(e);
			})
	}

	submit() {

		if (this.movie._id) {
			this.updateMovie();
		} else {
			this.createMovie();
		}

	}

	createMovie() {
		this.movieService.create(this.movie)
			.subscribe(movie => {
				this.movies.push(movie);
				this.resetForm()
			}, e => {
				console.log(e);
			});
	}

	resetForm() {
		this.movie = new Movie({});
	}

	remove(id: string, i) {
		this.movieService.remove(id)
			.subscribe(movie => {
				this.movies.splice(i, 1);
			}, e => {
				console.log(e);
			})
	}

	update(movie: any) {
		this.movie = movie;
	}

	updateMovie() {
		this.movieService.update(this.movie)
			.subscribe(movie => {
				this.resetForm();
				this.getMovies();
			}, e => {
				console.log(e);
			})
	}
}
