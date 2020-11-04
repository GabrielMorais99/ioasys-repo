import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ToastController } from '@ionic/angular'
import { LoginUserService } from '../api/login-user.service'

@Component({
	selector: 'app-login-user',
	templateUrl: './login-user.page.html',
	styleUrls: ['./login-user.page.scss'],
})
export class LoginUserPage implements OnInit {
	public loginForm: FormGroup
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
		private toastCtrl: ToastController
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
	async login() {
		this.loginuserService.login(this.loginForm.value).subscribe(
			(data) => console.log(data),
			(error) => console.log(error)
		)
	}
	async login_test() {
		this.loginuserService.login(this.test_login).subscribe(
			(data) => console.log(data),
			(error) => console.log(error)
		)
	}
}
