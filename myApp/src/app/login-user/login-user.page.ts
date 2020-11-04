import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { LoadingController, ToastController } from '@ionic/angular'
import { LoginUserService } from '../api/login-user.service'
import { Storage } from '@ionic/storage'
import { Router } from '@angular/router'
@Component({
	selector: 'app-login-user',
	templateUrl: './login-user.page.html',
	styleUrls: ['./login-user.page.scss'],
})
export class LoginUserPage implements OnInit {
	public loginForm: FormGroup
	loading: any
	messageCPF = ''
	messageDATAnasc = ''
	errorEmail = false
	errorSenha = false

	private test_login = {
		email: 'testeapple@ioasys.com.br',
		password: '12341234',
	}
	constructor(
		private formBuilder: FormBuilder,
		private loginuserService: LoginUserService,
		private toastCtrl: ToastController,
		private loadingCtrl: LoadingController,
		private localstorage: Storage,
		private router: Router
	) {}

	ngOnInit() {
		this.loginForm = this.formBuilder.group({
			email: ['', Validators.compose([Validators.required])],

			password: ['', Validators.compose([Validators.required])],
		})
	}
	async toast(message: string) {
		const toast = await this.toastCtrl.create({
			message: message,
			duration: 2000,
			keyboardClose: true,
		})
		toast.present()
	}

	async presentLoading() {
		this.loading = await this.loadingCtrl.create({
			translucent: true,
			spinner: 'dots',
			cssClass: 'loading-custom-class',
			message: 'Aguarde...',
		})
		await this.loading.present()
	}

	async login() {
		this.presentLoading()
		this.loginuserService.login(this.loginForm.value).subscribe(
			async (data) => {
				console.log(data)
				await this.localstorage.set('resp-login', data)
				this.router.navigate(['/user-profile'])
				await this.loading.dismiss()
			},
			async (error) => {
				console.log(error)
				await this.loading.dismiss()
				this.toast('Usuário inválido')
			}
		)
	}
	async login_test() {
		this.presentLoading()
		this.loginuserService.login(this.test_login).subscribe(
			(data) => console.log(data),
			(error) => console.log(error)
		)
	}
}
