import { RouterModule, Routes } from '@angular/router';
import { Pagina1Component } from './components/pagina1/pagina1.component';
import { Pagina2Component } from './components/pagina2/pagina2.component';
import { Pagina3Component } from './components/pagina3/pagina3.component';

const routes: Routes = [
    { path: 'pagina1', component: Pagina1Component },
    { path: 'pagina2', component: Pagina2Component },
    { path: 'pagina3', component: Pagina3Component },
    { path: '**', pathMatch:'full', redirectTo: 'pagina1' }
];

export const APPROUTES = RouterModule.forRoot(routes,{useHash:true});