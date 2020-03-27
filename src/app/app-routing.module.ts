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
  {
    path: 'resultado',
    loadChildren: () => import('./pages/resultado/resultado.module').then( m => m.ResultadoPageModule)
  },
  {
    path: 'pregunta3',
    loadChildren: () => import('./pages/pregunta3/pregunta3.module').then( m => m.Pregunta3PageModule)
  },
  {
    path: 'pregunta4',
    loadChildren: () => import('./pages/pregunta4/pregunta4.module').then( m => m.Pregunta4PageModule)
  },
  {
    path: 'pregunta5',
    loadChildren: () => import('./pages/pregunta5/pregunta5.module').then( m => m.Pregunta5PageModule)
  },  {
    path: 'pregunta6',
    loadChildren: () => import('./pregunta6/pregunta6.module').then( m => m.Pregunta6PageModule)
  },
  {
    path: 'pregunta7',
    loadChildren: () => import('./pregunta7/pregunta7.module').then( m => m.Pregunta7PageModule)
  },
  {
    path: 'pregunta8',
    loadChildren: () => import('./pregunta8/pregunta8.module').then( m => m.Pregunta8PageModule)
  },
  {
    path: 'pregunta9',
    loadChildren: () => import('./pregunta9/pregunta9.module').then( m => m.Pregunta9PageModule)
  },
  {
    path: 'pregunta10',
    loadChildren: () => import('./pregunta10/pregunta10.module').then( m => m.Pregunta10PageModule)
  },
  {
    path: 'pregunta11',
    loadChildren: () => import('./pregunta11/pregunta11.module').then( m => m.Pregunta11PageModule)
  },

  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
