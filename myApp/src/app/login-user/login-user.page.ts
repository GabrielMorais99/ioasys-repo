import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

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

	constructor(private formBuilder: FormBuilder) {}

	ngOnInit() {
		this.loginForm = this.formBuilder.group({
			Email: [
				'',
				Validators.compose([
					Validators.minLength(14),
					Validators.required,
				]),
			],

			Senha: [
				'',
				Validators.compose([
					Validators.minLength(10),
					Validators.required,
				]),
			],
		})
	}

	async login() {}
}
