import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'tabs', pathMatch: 'full' },
  { path: 'principal', loadChildren: './pages/principal/principal.module#PrincipalPageModule' },
  { path: 'list', loadChildren: './pages/pagina2/pagina2.module#Pagina2PageModule' },
  { path: 'pagina3', loadChildren: './pages/pagina3/pagina3.module#Pagina3PageModule' },
  { path: 'ajustes', loadChildren: './pages/ajustes/ajustes.module#AjustesPageModule' },
  { path: 'ajustes2', loadChildren: './pages/ajustes2/ajustes2.module#Ajustes2PageModule' },
  { path: 'modal', loadChildren: './pages/modal/modal.module#ModalPageModule' },
  { path: 'tabs', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
  { path: 'loguin', loadChildren: './auth/loguin/loguin.module#LoguinPageModule' },
  { path: 'register', loadChildren: './auth/register/register.module#RegisterPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
