import { DriverService } from './../../../services/driver.service';
import { Component, OnInit } from '@angular/core';
import { Driver } from 'src/app/interfaces/driver';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {

  drivers: Driver[];
  constructor(private driverService: DriverService)
    {
      this.getDrivers();
     }

  getDrivers(){
      this.driverService.get().subscribe((data: Driver[])=>{
        this.drivers = data;
      },(error)=>{
        console.log(error);
        alert('Hubo un error');
      });
     }
  ngOnInit() {
  }
  delete(id){
    if(confirm('Seguro que deseas eliminar Conductor ?')){

      this.driverService.delete(id).subscribe((data)=>{
        alert('Eliminado con éxito');
        console.log(data);
        this.getDrivers();
      },(error)=>{
        alert('Hubo un error');
        console.log(error);
      });

    }

  }
}
