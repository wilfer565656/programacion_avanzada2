import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { comentario } from 'src/app/interfaces/Comentario';

@Component({
  selector: 'app-agrega-editar-comentario',
  templateUrl: './agrega-editar-comentario.component.html',
  styleUrls: ['./agrega-editar-comentario.component.css']
})
export class AgregaEditarComentarioComponent implements OnInit {

  agregarComentario:FormGroup;

  constructor(private fb:FormBuilder) {
    this.agregarComentario = this.fb.group({
      titulo:['',Validators.required],
      autor:['',Validators.required],
      texto:['',Validators.required]

    })
   }
   

  ngOnInit(): void {
  }
  agregar(){

    
      const i=10;
      console.log(this.agregarComentario);
      const comentario: comentario={
        id$:i,
        titulo: this.agregarComentario.getError('titulo')?.value,
        autor:this.agregarComentario.get('autor')?.value,
        texto:this.agregarComentario.get('texto')?.value,
        fechaCreacion :new Date()

      }
      console.log(comentario);
    }
}
