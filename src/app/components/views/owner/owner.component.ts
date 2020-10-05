import { OwnerService } from './../../../services/owner.service';
import { Component, OnInit } from '@angular/core';
import { Owner } from 'src/app/interfaces/owner';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css']
})
export class OwnerComponent implements OnInit {

  owners: Owner[];
  constructor(private ownerService: OwnerService)
    {
      this.getOwner();
     }

  getOwner(){
      this.ownerService.get().subscribe((data: Owner[])=>{
        this.owners = data;
      },(error)=>{
        console.log(error);
        alert('Hubo un error');
      });
     }
  ngOnInit() {
  }
  delete(id){
    if(confirm('Seguro que deseas eliminar este dato Propietario')){

      this.ownerService.delete(id).subscribe((data)=>{
        alert('Eliminado con éxito');
        console.log(data);
        this.getOwner();
      },(error)=>{
        alert('Hubo un error');
        console.log(error);
      });

    }

  }

}
