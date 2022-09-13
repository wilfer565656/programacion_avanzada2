import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AgregaEditarComentarioComponent } from './components/agrega-editar-comentario/agrega-editar-comentario.component';
import { ListarComentarioComponent } from './components/listar-comentario/listar-comentario.component';
import { VerComentariosComponent } from './components/ver-comentarios/ver-comentarios.component';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AgregaEditarComentarioComponent,
    ListarComentarioComponent,
    VerComentariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
