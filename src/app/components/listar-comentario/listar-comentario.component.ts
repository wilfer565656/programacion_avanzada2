import { Component, OnInit } from '@angular/core';
import { comentario } from 'src/app/interfaces/Comentario';

@Component({
  selector: 'app-listar-comentario',
  templateUrl: './listar-comentario.component.html',
  styleUrls: ['./listar-comentario.component.css']
})
export class ListarComentarioComponent implements OnInit {
 listComentario:comentario[]=[
  {
    id$:1,
    titulo:'ejemplo1',
    autor: 'autor1',
    texto: 'text',
    fechaCreacion : new Date()
    
  },
  {
    id$:2,
    titulo:'ejemplo2',
    autor: 'autor1',
    texto: 'text',
    fechaCreacion : new Date()
    
  },
  {
    id$:3,
    titulo:'ejemplo3',
    autor: 'autor2',
    texto: 'text',
    fechaCreacion : new Date()
    
  }

 ]
  constructor() { }

  ngOnInit(): void {
  }

}
