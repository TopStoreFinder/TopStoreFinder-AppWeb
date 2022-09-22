import { Component, OnInit } from '@angular/core';
import { Duenho } from 'src/app/model/duenho';
import {Router} from '@angular/router';
import {DuenhoService} from './../../../service/duenho.service';

@Component({
  selector: 'app-duenho-creaedita',
  templateUrl: './duenho-creaedita.component.html',
  styleUrls: ['./duenho-creaedita.component.css']
})
export class DuenhoCreaeditaComponent implements OnInit {
  duenho: Duenho = new Duenho();
  mensaje: string = "";
  constructor(private duenhoService: DuenhoService,private router: Router) { }


  ngOnInit(): void {
  }
  aceptar(): void{
    if(this.duenho.nombreDuenho.lenght > 0 && this.duenho.apellidoDuenho.lenght > 0  && this.edadDuenho > 0){
         this.duenho.insertar(this.duenho).subscribe(data=>{
          this.duenhoService.listar().subscribe(data =>{
            this.duenhoService.setLista(data);
          })
         })
         this.router.navigate(['duenhos']);
    }else {
      this.mensaje = "Complete los valores requeridos";
    }
  }

}
