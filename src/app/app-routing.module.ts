import { HomeComponent } from './components/views/home/home.component';
import { FormownerComponent } from './components/views/owner/formowner/formowner.component';
import { FormdriverComponent } from './components/views/driver/formdriver/formdriver.component';
import { FormvehicleComponent } from './components/views/vehicle/formvehicle/formvehicle.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VehicleComponent } from './components/views/vehicle/vehicle.component';
import { DriverComponent } from './components/views/driver/driver.component';

import { OwnerComponent } from './components/views/owner/owner.component';


const routes: Routes = [
  {path : '', component: HomeComponent },
  {path : 'driver', component: DriverComponent },
  {path : 'driver/:id', component: DriverComponent },
  {path: 'formdriver' , component: FormdriverComponent},
  {path: 'formdriver/:id' , component: FormdriverComponent},
  {path: 'owner' , component: OwnerComponent},
  {path: 'owner/:id' , component: OwnerComponent},
  {path: 'formowner' , component: FormownerComponent},
  {path: 'formowner/:id' , component: FormownerComponent},
  {path: 'vehicle' , component: VehicleComponent},
  {path: 'vehicle/:id' , component: VehicleComponent},
  {path: 'formvehicle' , component: FormvehicleComponent},
  {path: 'formvehicle/:id' , component: FormvehicleComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
