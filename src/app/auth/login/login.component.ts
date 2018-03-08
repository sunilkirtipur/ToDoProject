import { Component, OnInit } from '@angular/core';
import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	user = {
		email: '',
		password: ''
	}

	constructor(
		public authService: AuthService,
		public router: Router
	) { }

	ngOnInit() {
	}

	submit() {
		this.authService.login(this.user)
			.subscribe(data => {
				this.authService.setUser(data);
				this.router.navigate(['movie-list']);
			}, e => {
				console.log(e);			
				// Create one service for error hadling 
				// Implement snackbar ( angular material ) for  for error disply.
				// Call that service and pass err.
			});

	}
}
