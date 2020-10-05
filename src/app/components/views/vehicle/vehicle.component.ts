import { kindVehicles } from './../../../interfaces/kindVehicles';
import { Owner } from 'src/app/interfaces/owner';
import { VehicleService } from './../../../services/vehicle.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vehicle } from 'src/app/interfaces/vehicle';
import { Driver } from 'src/app/interfaces/driver';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {
  vehicle: Vehicle = {
    plate: null,
    color: null,
    mark: null,
    owner_id: null,
    driver_id: null,
    kind_vehicle_id: null
  };
  vehicles: Vehicle[];
  only:boolean = false;
  id:any;
  constructor(private vehicleService: VehicleService,private activatedRoute:ActivatedRoute)
    {
      this.id = this.activatedRoute.snapshot.params['id'];
      if(this.id){
        this.only = true;
        this.vehicleService.get().subscribe((data: Vehicle[])=>{
          this.vehicles=data;
          this.vehicle=this.vehicles.find((m)=>{return m.id == this.id});
          console.log(this.vehicle);
        });
      }else{
        this.only = false;
        this.getVehicles();
      }
    

     }

  getVehicles(){
      this.vehicleService.get().subscribe((data: Vehicle[])=>{
        this.vehicles = data;
        console.log(this.vehicles);
      },(error)=>{
        console.log(error);
        alert('Hubo un error');
      });
     }

  ngOnInit() {
  }
  delete(id){
    if(confirm('Seguro que deseas eliminar este Vehículo ?')){

      this.vehicleService.delete(id).subscribe((data)=>{
        alert('Eliminado con éxito');
        console.log(data);
        this.getVehicles();
      },(error)=>{
        alert('Hubo un error');
        console.log(error);
      });

    }

  }

}
