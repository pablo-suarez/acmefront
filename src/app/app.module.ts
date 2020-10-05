import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/main/navbar/navbar.component';
import { DriverComponent } from './components/views/driver/driver.component';
import { OwnerComponent } from './components/views/owner/owner.component';
import { VehicleComponent } from './components/views/vehicle/vehicle.component';
import { FormvehicleComponent } from './components/views/vehicle/formvehicle/formvehicle.component';
import { FormdriverComponent } from './components/views/driver/formdriver/formdriver.component';
import { FormownerComponent } from './components/views/owner/formowner/formowner.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/views/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DriverComponent,
    OwnerComponent,
    VehicleComponent,
    FormvehicleComponent,
    FormdriverComponent,
    FormownerComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
