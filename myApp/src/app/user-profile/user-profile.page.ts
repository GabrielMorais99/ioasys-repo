import { Component, OnInit } from '@angular/core'
import { Storage } from '@ionic/storage'

@Component({
	selector: 'app-user-profile',
	templateUrl: './user-profile.page.html',
	styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {
	cardComponent: boolean = false
	buscaComponent: boolean = false
	constructor(private localstorage: Storage) {}

	ngOnInit() {}
	ionviewWillEnter() {}
	async busca() {
		this.buscaComponent = true

		let input = document.getElementById('search').innerText
		console.log(input)
		if (input !== '') {
			let resp = await this.localstorage.get('resp-login')
			console.log(resp)
			if (input === resp) {
				var card = document.createElement('#card')
				console.log(card)
				this.cardComponent = true
			}
		}
	}
}
