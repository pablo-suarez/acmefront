import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Owner } from 'src/app/interfaces/owner';
import { OwnerService } from 'src/app/services/owner.service';

@Component({
  selector: 'app-formowner',
  templateUrl: './formowner.component.html',
  styleUrls: ['./formowner.component.css']
})
/**
 * Formulario para guardar o editar el propietario
 */
export class FormownerComponent implements OnInit {

  owner: Owner = {
    dni: null,
    name: null,
    lastname: null,
    address: null,
    telephone: null,
    city: null
  };
  /**
   * @var id id del propietario a editar
   * @editar validador si hay que editar o guardar
   */
  id: any;
  editar: boolean = false;
  owners: Owner[];
  constructor(private ownerService: OwnerService, private activatedRoute: ActivatedRoute,
    private router: Router) {
    this.id = this.activatedRoute.snapshot.params['id'];
    if (this.id) {
      this.editar = true;
      this.ownerService.get().subscribe((data: Owner[]) => {
        this.owners = data;
        this.owner = this.owners.find((m) => { return m.id == this.id });
      });
    } else {
      this.editar = false;
    }
  }

  ngOnInit() {
  }
  /**
   * Función para editar o guardar el propietario
   */
  saveOwner() {
    if (this.editar) {
      this.ownerService.put(this.owner).subscribe((data) => {
        alert('Propietario Actualizado');
        this.router.navigateByUrl('/owner');
      }, (error) => {
        console.log(error);
        alert('error!');
      });
    } else {
      this.ownerService.save(this.owner).subscribe((data) => {
        alert('Propietario Guardado');
        this.router.navigateByUrl('/owner');
      }, (error) => {
        console.log(error);
        alert('error!');
      });
    }

  }

}
