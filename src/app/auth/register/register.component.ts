import { Component, OnInit } from '@angular/core';

import { AuthService } from './../services/auth.service';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

	user = {
		name: '',
		email: '',
		password: '',
		confirmPassword: ''
	}

	constructor(
		public authService: AuthService
	) { }

	ngOnInit() {
	}

	submit() {

		this.authService.register(this.user)
			.subscribe(user => {
				console.log(user);
			}, e => {
				console.log(e);
			})

	}


}
