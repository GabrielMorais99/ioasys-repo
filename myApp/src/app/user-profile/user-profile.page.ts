import { Component, OnInit } from '@angular/core'

@Component({
	selector: 'app-user-profile',
	templateUrl: './user-profile.page.html',
	styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {
	input = document.getElementById('search')

	constructor() {}

	ngOnInit() {}
	ionviewWillEnter() {
		console.log(this.input)
	}
	async busca() {
		console.log('busca')
	}
}
