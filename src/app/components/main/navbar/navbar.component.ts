import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  rutas = [
    {
      name: 'Home',
      path: '/'
    },
    {
      name: 'Vehiculos',
      path: '/vehicle'
    },
    {
      name: 'Propietarios',
      path: '/owner'
    },
    {
      name: 'Conductores',
      path: '/driver'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
