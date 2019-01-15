import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ArtistComponent } from './components/artist/artist.component';
import { SearchComponent } from './components/search/search.component';



export const ROUTES:Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'search', component: SearchComponent },    
    { path: 'artist/:id', component: ArtistComponent },         
    { path: '', component: HomeComponent },            
    { path: '**', pathMatch:'full', redirectTo: 'home' }
];

