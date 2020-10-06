import { DriverService } from './../../../services/driver.service';
import { Component, OnInit } from '@angular/core';
import { Driver } from 'src/app/interfaces/driver';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
/**
 * Mostrar lista de conductores guardados
 */
export class DriverComponent implements OnInit {

  drivers: Driver[];
  constructor(private driverService: DriverService) {
    this.getDrivers();
  }
  /**
   * Obtiene todos los conductores
   */
  getDrivers() {
    this.driverService.get().subscribe((data: Driver[]) => {
      this.drivers = data;
    }, (error) => {
      console.log(error);
      alert('Hubo un error');
    });
  }
  ngOnInit() {
  }
  /**
   * 
   * @param id identificador del conductor a borrar
   */
  delete(id) {
    if (confirm('Seguro que deseas eliminar Conductor ?')) {

      this.driverService.delete(id).subscribe((data) => {
        alert('Eliminado con éxito');
        this.getDrivers();
      }, (error) => {
        alert('Hubo un error');
        console.log(error);
      });

    }

  }
}
