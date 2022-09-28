import { Stock } from './../../../model/Stock';
import { StockService } from 'src/app/service/stock.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-buscar',
  templateUrl: './stock-buscar.component.html',
  styleUrls: ['./stock-buscar.component.css']
})
export class StockBuscarComponent implements OnInit {
textoBuscar: string = ""
  constructor(private StockService: StockService) { }

  ngOnInit(): void {
  }
  buscar(e: any) {
    let array: Stock[] = [];
    this.StockService.listar().subscribe(data => {
      data.forEach((element, index) => {
        if (element.id.toString().includes(e.target.value)) {
          array.push(data[index]);
        }
      });
      this.StockService.setLista(array);
    })
  }
}
