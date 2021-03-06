import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Driver } from 'src/app/interfaces/driver';
import { DriverService } from 'src/app/services/driver.service';

@Component({
  selector: 'app-formdriver',
  templateUrl: './formdriver.component.html',
  styleUrls: ['./formdriver.component.css'],
})
/**
 * Formulario de conductor, guardar y actualizar
 */
export class FormdriverComponent implements OnInit {
  driver: Driver = {
    dni: null,
    name: null,
    lastname: null,
    address: null,
    telephone: null,
    city: null,
  };
  /**
   * @var id recide el id del conductor
   * @var editar parametro para saber si el programa de editar o guardar
   */
  id: any;
  editar: boolean = false;
  drivers: Driver[];
  constructor(
    private driverService: DriverService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.id = this.activatedRoute.snapshot.params['id'];
    if (this.id) {
      this.editar = true;
      this.driverService.get().subscribe((data: Driver[]) => {
        this.drivers = data;
        this.driver = this.drivers.find((m) => {
          return m.id == this.id;
        });
      });
    } else {
      this.editar = false;
    }
  }

  ngOnInit() { }
  /**
   * Función para guardar y/o actualizar
   */
  saveDriver() {
    if (this.editar) {
      this.driverService.put(this.driver).subscribe(
        (data) => {
          alert('Conductor ActualizadO');
          this.router.navigateByUrl('/driver');
        },
        (error) => {
          console.log(error);
          alert('error!');
        }
      );
    } else {
      this.driverService.save(this.driver).subscribe(
        (data) => {
          alert('Conductor Guardado');
          this.router.navigateByUrl('/driver');
        },
        (error) => {
          console.log(error);
          alert('error!');
        }
      );
    }
  }
}
