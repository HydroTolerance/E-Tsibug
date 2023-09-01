import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'suggestion',
    loadChildren: () => import('./suggestion/suggestion.module').then( m => m.SuggestionPageModule)
  },
  {
    path: 'fiesta',
    loadChildren: () => import('./fiesta/fiesta.module').then( m => m.FiestaPageModule)
  },
  {
    path: 'wedding',
    loadChildren: () => import('./wedding/wedding.module').then( m => m.WeddingPageModule)
  },
  {
    path: 'others',
    loadChildren: () => import('./others/others.module').then( m => m.OthersPageModule)
  },
  {
    path: 'comments',
    loadChildren: () => import('./comments/comments.module').then( m => m.CommentsPageModule)
  },
  {
    path: 'adobo',
    loadChildren: () => import('./adobo/adobo.module').then( m => m.AdoboPageModule)
  },
  {
    path: 'yemacake',
    loadChildren: () => import('./yemacake/yemacake.module').then( m => m.YemacakePageModule)
  },
  {
    path: 'bibingka',
    loadChildren: () => import('./bibingka/bibingka.module').then( m => m.BibingkaPageModule)
  },
  {
    path: 'sinigang',
    loadChildren: () => import('./sinigang/sinigang.module').then( m => m.SinigangPageModule)
  },
  {
    path: 'logout',
    loadChildren: () => import('./logout/logout.module').then( m => m.LogoutPageModule)
  },
  {
    path: 'lechon',
    loadChildren: () => import('./lechon/lechon.module').then( m => m.LechonPageModule)
  },
  {
    path: 'halo-halo',
    loadChildren: () => import('./halo-halo/halo-halo.module').then( m => m.HaloHaloPageModule)
  },
  {
    path: 'bukopie',
    loadChildren: () => import('./bukopie/bukopie.module').then( m => m.BukopiePageModule)
  },
  {
    path: 'putobumbong',
    loadChildren: () => import('./putobumbong/putobumbong.module').then( m => m.PutobumbongPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
