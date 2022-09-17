import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resenia-calificacion',
  templateUrl: './resenia-calificacion.component.html',
  styleUrls: ['./resenia-calificacion.component.css']
})
export class ReseniaCalificacionComponent implements OnInit {

  constructor(public route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
