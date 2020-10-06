import { kindVehicles } from './../../../../interfaces/kindVehicles';
import { Vehicle } from './../../../../interfaces/vehicle';
import { Component, OnInit } from '@angular/core';
import { VehicleService } from 'src/app/services/vehicle.service';
import { Owner } from 'src/app/interfaces/owner';
import { Driver } from 'src/app/interfaces/driver';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formvehicle',
  templateUrl: './formvehicle.component.html',
  styleUrls: ['./formvehicle.component.css']
})
/**
 * Edita o guarda vehiculos con su propietario, conductor y tipo
 */
export class FormvehicleComponent implements OnInit {

  vehicle: Vehicle = {
    plate: null,
    color: null,
    mark: null,
    owner_id: null,
    driver_id: null,
    kind_vehicle_id: null
  };
  id: any;
  editar: boolean = false;
  vehicles: Vehicle[];
  owners: Owner[];
  drivers: Driver[];
  kindVehicles: kindVehicles[];
  constructor(private vehicleService: VehicleService, private activatedRoute: ActivatedRoute,
    private router: Router,) {
    this.id = this.activatedRoute.snapshot.params['id'];
    if (this.id) {
      this.editar = true;
      this.vehicleService.get().subscribe((data: Vehicle[]) => {
        this.vehicles = data;
        this.vehicle = this.vehicles.find((m) => { return m.id == this.id });
        console.log(this.vehicle);
      });
    } else {
      this.editar = false;
    }
    this.vehicleService.getOwner().subscribe((data: Owner[]) => {
      this.owners = data;
    });
    this.vehicleService.getDriver().subscribe((data: Driver[]) => {
      this.drivers = data;
    });
    this.vehicleService.getKindVehicle().subscribe((data: kindVehicles[]) => {
      this.kindVehicles = data;
    });
  }

  ngOnInit() {
  }
  /**
   * Guarda o modifica el vehículo
   */
  saveVehicle() {

    if (this.editar) {
      this.vehicleService.put(this.vehicle).subscribe((data) => {
        alert('Vehiculo Editado');
        this.router.navigateByUrl('/vehicle');
      }, (error) => {
        console.log(error);
        alert('error!');
      });
    } else {
      this.vehicleService.save(this.vehicle).subscribe((data) => {
        alert('Vehiculo Guardado');
        this.router.navigateByUrl('/vehicle');
        console.log(data);
      }, (error) => {
        console.log(error);
        alert('error!');
      });
    }

  }
}
