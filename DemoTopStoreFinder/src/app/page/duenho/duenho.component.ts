import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-duenho',
  templateUrl: './duenho.component.html',
  styleUrls: ['./duenho.component.css']
})
export class DuenhoComponent implements OnInit {

  constructor(public route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
