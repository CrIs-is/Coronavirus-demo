import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'pregunta1',
    loadChildren: () => import('./pages/pregunta1/pregunta1.module').then( m => m.Pregunta1PageModule)
  },
  {
    path: 'pregunta2',
    loadChildren: () => import('./pages/pregunta2/pregunta2.module').then( m => m.Pregunta2PageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
