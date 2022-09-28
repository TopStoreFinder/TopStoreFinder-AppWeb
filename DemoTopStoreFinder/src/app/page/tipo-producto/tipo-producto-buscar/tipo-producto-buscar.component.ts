import { TipoProducto } from 'src/app/model/TipoProducto';
import { TipoProductoService } from './../../../service/tipo-producto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tipo-producto-buscar',
  templateUrl: './tipo-producto-buscar.component.html',
  styleUrls: ['./tipo-producto-buscar.component.css']
})
export class TipoProductoBuscarComponent implements OnInit {
textoBuscar: string = ""
  constructor(private TipoProductoService:TipoProductoService) { }

  ngOnInit(): void {}
buscar(e:any){
  let array: TipoProducto[]=[];
this.TipoProductoService.listar().subscribe(data =>{
  data.forEach((element, index)=>{
    if(element.categoriaNombre.includes(e.target.value)){
      array.push(data[index]);
    }
  });
  this.TipoProductoService.setLista(array);
})
}
}
