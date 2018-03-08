import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MediaMatcher } from '@angular/cdk/layout';

import { Router } from '@angular/router';
import { AuthService } from './auth/services/auth.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

	mobileQuery: MediaQueryList;
	private _mobileQueryListener: () => void;

	public currentUser: any = {};

	constructor(
		public router: Router,
		public authService: AuthService,
		changeDetectorRef: ChangeDetectorRef, media: MediaMatcher
	) {
		this.mobileQuery = media.matchMedia('(max-width: 600px)');
		this._mobileQueryListener = () => changeDetectorRef.detectChanges();
		this.mobileQuery.addListener(this._mobileQueryListener);
	}

	ngOnInit() {
		this.currentUser = this.authService.getUser();
	}


	login() {
		this.router.navigate(['login']);
	}


	register() {
		this.router.navigate(['register']);
	}

	ngOnDestroy(): void {
		this.mobileQuery.removeListener(this._mobileQueryListener);
	  }
}
