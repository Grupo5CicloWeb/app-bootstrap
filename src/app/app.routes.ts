import { Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { FormPipesComponent } from './form-pipes/form-pipes.component';

export const routes: Routes = [
    {path : "form", component: FormularioComponent},
    {path : "pipes", component: FormPipesComponent}
];
