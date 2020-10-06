import { OwnerService } from './../../../services/owner.service';
import { Component, OnInit } from '@angular/core';
import { Owner } from 'src/app/interfaces/owner';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css']
})
/**
 * Función para traer lista de propietarios
 */
export class OwnerComponent implements OnInit {

  owners: Owner[];
  constructor(private ownerService: OwnerService) {
    this.getOwner();
  }
/**
 * Trae toda la lista de propietarios
 */
  getOwner() {
    this.ownerService.get().subscribe((data: Owner[]) => {
      this.owners = data;
    }, (error) => {
      console.log(error);
      alert('Hubo un error');
    });
  }
  ngOnInit() {
  }
  /**
   * 
   * @param id id del propietario a borrar
   */
  delete(id) {
    if (confirm('Seguro que deseas eliminar este dato Propietario')) {

      this.ownerService.delete(id).subscribe((data) => {
        alert('Eliminado con éxito');
        this.getOwner();
      }, (error) => {
        alert('Hubo un error');
        console.log(error);
      });

    }

  }

}
