import { NgModule } from '@angular/core'
import { PreloadAllModules, RouterModule, Routes } from '@angular/router'

const routes: Routes = [
	{
		path: 'login-user',
		loadChildren: () =>
			import('./login-user/login-user.module').then(
				(m) => m.LoginUserPageModule
			),
	},
	{
		path: '',
		redirectTo: 'login-user',
		pathMatch: 'full',
	},
	{
		path: 'user-profile',
		loadChildren: () =>
			import('./user-profile/user-profile.module').then(
				(m) => m.UserProfilePageModule
			),
	},
]

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
	],
	exports: [RouterModule],
})
export class AppRoutingModule {}
