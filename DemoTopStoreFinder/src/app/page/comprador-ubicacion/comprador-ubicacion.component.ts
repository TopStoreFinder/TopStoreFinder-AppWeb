import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comprador-ubicacion',
  templateUrl: './comprador-ubicacion.component.html',
  styleUrls: ['./comprador-ubicacion.component.css']
})
export class CompradorUbicacionComponent implements OnInit {

  constructor(public route:ActivatedRoute) { }

  ngOnInit(): void {
  }

}
