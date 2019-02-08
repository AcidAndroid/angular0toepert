import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { PeliculasPopularesComponent } from './components/peliculas-populares/peliculas-populares.component';
import { PeliculasVistasComponent } from './components/peliculas-vistas/peliculas-vistas.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'pelicula/:id', component: PeliculaComponent },
    { path: 'populares', component: PeliculasPopularesComponent },
    { path: 'vistas', component: PeliculasVistasComponent },
    { path: '**', pathMatch:'full', redirectTo: 'home' }
];

export const APP_RUTAS_PELICULAS = RouterModule.forRoot(routes);