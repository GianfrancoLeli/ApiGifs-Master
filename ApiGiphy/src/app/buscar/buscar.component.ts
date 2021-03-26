import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  constructor() { }

  memes: string;

  ngOnInit(): void {
  }

  buscar(form) {
    location.href = `/resultados/${form.value.memes}`;
  }

}
