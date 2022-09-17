import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tienda-producto',
  templateUrl: './tienda-producto.component.html',
  styleUrls: ['./tienda-producto.component.css']
})
export class TiendaProductoComponent implements OnInit {

  constructor(public route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
