import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Duenho } from 'src/app/model/duenho';
import { DuenhoService } from 'src/app/service/duenho.service';

@Component({
  selector: 'app-duenho-listar',
  templateUrl: './duenho-listar.component.html',
  styleUrls: ['./duenho-listar.component.css']
})
export class DuenhoListarComponent implements OnInit {
  datasource: MatTableDataSource<Duenho> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'nombre','edad','direccion'];
  constructor(private d: DuenhoService) { }

  ngOnInit(): void {
    this.d.listar().subscribe(data => {
      this.datasource = new MatTableDataSource(data);
    })
    this.d.getLista().subscribe(data =>{
      this.datasource = new MatTableDataSource(data);
    });
  }

}
