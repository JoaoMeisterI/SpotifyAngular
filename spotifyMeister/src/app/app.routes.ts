import path from 'node:path';
import { Routes } from '@angular/router';


export const routes: Routes = [

  {
    path: '',
    redirectTo:'login',
    pathMatch:'full'
  },

  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.routes').then(m => m.LoginRotas)
  },

  {
    path: 'player',
    loadChildren: () => import('./pages/player/player.routes').then(m => m.PlayerRotas)
  }

];
