import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GifsComponent } from '../app/gifs/gifs.component';
import { BuscarComponent } from '../app/buscar/buscar.component';

const APP_ROUTES: Routes = [
    { path: '', component: BuscarComponent },
    { path: 'resultados/:q', component: GifsComponent },
]

@NgModule({ 
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule { }