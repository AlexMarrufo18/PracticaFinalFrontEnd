import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MedicoService } from '../../services/medico.service';
import {Medico} from 'src/app/models/medico';

declare var M: any;

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styleUrls: ['./medico.component.css'],
  providers:[MedicoService]

})
export class MedicoComponent implements OnInit {

  titulo: string;
  medicos: any = [];
  medico = new Medico();
  estadoMedicos:boolean;

  constructor(public medicoService: MedicoService) {
    this.titulo='Registro de Médicos';
    this.getMedicos();
   }

  ngOnInit(): void {
  }

  
  showMedicos(){
    return this.estadoMedicos = !this.estadoMedicos;
  }

  addMedico(form?: NgForm){
    if(form.value._id){
      this.medicoService.putMedico(this.medico)
      .subscribe(res => {
        this.nuevoForm(form);
        M.toast({html: 'Actualizado satisfactoriamente'});
        this.getMedicos();
      });
    } else{
      this.medicoService.postMedico(this.medico)
      .subscribe(res =>{
        this.nuevoForm(form);
        M.toast({html: 'Guardado satisfactoriamente'});
        this.getMedicos();
      });
    }  
  }  

  getMedicos(){
    this.medicoService.getMedicos()
    .subscribe(res => {
      this.medicos = res [1];
    });
  }

  editMedico(medico: Medico){
    this.medico=medico;
  }

  deleteMedico(_id: string){
    if(confirm('Estas seguro de eliminar medico')){
      this.medicoService.deleteMedico(_id)
      .subscribe(res => {
        this.getMedicos();
        M.toast({html: 'Medico eliminado satisfactoriamente'});
    });
    }
  }

  nuevoForm(form? : NgForm){
    if(form){
      form.reset();
      this.medicoService.selectedMedico = new Medico();
    }
  }


}
