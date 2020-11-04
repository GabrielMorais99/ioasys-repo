import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable({
	providedIn: 'root',
})
export class LoginUserService {
	API_URL = 'https://empresas.ioasys.com.br/api/v1/users/auth/sign_in'

	constructor(private http: HttpClient) {}

	login(credencials) {
		console.log(credencials)
		return this.http.post(this.API_URL, credencials)
	}
}
