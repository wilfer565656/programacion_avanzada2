import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregaEditarComentarioComponent } from './components/agrega-editar-comentario/agrega-editar-comentario.component';
import { ListarComentarioComponent } from './components/listar-comentario/listar-comentario.component';
import { VerComentariosComponent } from './components/ver-comentarios/ver-comentarios.component';

const routes: Routes = [
  {path:'',component:ListarComentarioComponent},
  {path:'add',component:AgregaEditarComentarioComponent},
  {path:'**',redirectTo:'',pathMatch:'full'} ,//ruta por defecto
  {path:'edit/:id',component:AgregaEditarComentarioComponent},
  {path:'visualizar/:id',component:VerComentariosComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
