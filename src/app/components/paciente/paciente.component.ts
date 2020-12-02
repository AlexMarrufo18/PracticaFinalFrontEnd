import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';
import { PacienteService } from '../../services/paciente.service';
import {Paciente} from 'src/app/models/paciente';

declare var M: any;

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css'],
  providers:[PacienteService]
})
export class PacienteComponent implements OnInit {
  titulo: string;
  pacientes: any = [];
  paciente= new Paciente();
  estadoPacientes:boolean;

  constructor(public pacienteService: PacienteService) {
    this.titulo='Registro de Pacientes';
    this.getPacientes();
   }

  ngOnInit(): void {
    
  }

  showPacientes(){
    return this.estadoPacientes = !this.estadoPacientes;
  }

  addPaciente(form?: NgForm){
    if(form.value._id){
      this.pacienteService.putPaciente(this.paciente)
      .subscribe(res => {
        this.nuevoForm(form);
        M.toast({html: 'Actualizado satisfactoriamente'});
        this.getPacientes();
      });
    } else{
      this.pacienteService.postPaciente(this.paciente)
      .subscribe(res =>{
        this.nuevoForm(form);
        M.toast({html: 'Guardado satisfactoriamente'});
        this.getPacientes();
      });
    }  
  }  

  getPacientes(){
    this.pacienteService.getPacientes()
    .subscribe(res => {
      this.pacientes = res [1];
    });
  }

  editPaciente(paciente: Paciente){
    this.paciente=paciente;
  }

  deletePaciente(_id: string){
    if(confirm('Estas seguro de eliminar paciente')){
      this.pacienteService.deletePaciente(_id)
      .subscribe(res => {
        this.getPacientes();
        M.toast({html: 'Paciente eliminado satisfactoriamente'});
    });
    }
  }

  nuevoForm(form? : NgForm){
    if(form){
      form.reset();
      this.pacienteService.selectedPaciente = new Paciente();
    }
  }

}
