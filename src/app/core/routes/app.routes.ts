import { Routes } from '@angular/router';
import { HomeComponent } from '../../features/home/home.component';
import { CharactersComponent } from '../../features/characters/characters.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Clash Royale - Home',
  },
  {
    path: 'characters',
    component: CharactersComponent,
    title: 'Clash Royale - Characters',
  },
];
