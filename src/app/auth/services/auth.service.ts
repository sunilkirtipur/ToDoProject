import { Injectable } from '@angular/core';

import { Http, RequestOptions, Headers, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { BaseService } from './../../shared/base.service';

@Injectable()
export class AuthService {


	private url: string;
	redirectUrl:string;

	constructor(
		public http: Http,
		public baseService: BaseService
	) {
		this.url = this.baseService.url + 'auth/'
	}

	/**
	 * Create movie
	 * @param movie 
	 */
	register(user: any): Observable<any> {

		let body = JSON.stringify(user);

		return this.http.post(this.url + 'register', body, this.baseService.getOptions())
			.map(this.baseService.extractData)
			.catch(this.baseService.handleError)
	}


	login(user: any): Observable<any> {

		let body = JSON.stringify(user);

		return this.http.post(this.url + 'login', body, this.baseService.getOptions())
			.map(this.baseService.extractData)
			.catch(this.baseService.handleError)
	}

	/**	Set user and token to localstorage */
	setUser(data: any) {
		let user = JSON.stringify(data.user);
		localStorage.setItem('user', user);
		localStorage.setItem('token', data.token);
	}


	getUser() {
		return JSON.parse(localStorage.getItem('user'));
	}

	logout() {
		localStorage.clear();
	}

	isLoggedIn() {
		
		if (localStorage.getItem('token')) {
			return true;
		} else {
			return false;
		}
	}
} 