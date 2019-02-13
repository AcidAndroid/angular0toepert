import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PeliculasPopularesComponent } from './components/peliculas-populares/peliculas-populares.component';
import { PeliculasVistasComponent } from './components/peliculas-vistas/peliculas-vistas.component';
import { DatospeliculaComponent } from './components/datospelicula/datospelicula.component';
import { BuscadorComponent } from './components/buscador/buscador.component';


const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'datospelicula/:id', component: DatospeliculaComponent },
    { path: 'populares', component: PeliculasPopularesComponent },
    { path: 'vistas', component: PeliculasVistasComponent },    
    { path: 'buscar', component: BuscadorComponent },  
    { path: '**', pathMatch:'full', redirectTo: 'home' }
];

export const APP_RUTAS_PELICULAS = RouterModule.forRoot(routes);