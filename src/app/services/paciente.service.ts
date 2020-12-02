import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Paciente } from '../models/paciente';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  selectedPaciente: Paciente;
  pacientes: Paciente[];
  readonly URL_API = 'https://practicamongodb.herokuapp.com/api/pacientes';

  constructor(private http: HttpClient) { 
    this.selectedPaciente=new Paciente();
  }

  getPacientes(){
    const headers = new HttpHeaders({
      'x-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmE2YjYyNGY1MmZmMDAwMTdiOWJkMGEiLCJpYXQiOjE2MDY4NzY3ODEsImV4cCI6MTYwNjkxOTk4MX0.wssz4-wycroBQANdQVuquwETknyS6XLM8hstahHYGfc'
    });
    return this.http.get<Paciente>(this.URL_API,{headers}).pipe(map(data => {
      return Object.values(data);
    }));
  }

  postPaciente(Paciente: Paciente){
    console.log(Paciente);
    const headers = new HttpHeaders({
      'x-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmE2YjYyNGY1MmZmMDAwMTdiOWJkMGEiLCJpYXQiOjE2MDY4NzY3ODEsImV4cCI6MTYwNjkxOTk4MX0.wssz4-wycroBQANdQVuquwETknyS6XLM8hstahHYGfc'
    });
    return this.http.post(this.URL_API, Paciente,{headers});    
  }

  putPaciente(paciente: Paciente){
    const headers = new HttpHeaders({
      'x-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmE2YjYyNGY1MmZmMDAwMTdiOWJkMGEiLCJpYXQiOjE2MDY4NzY3ODEsImV4cCI6MTYwNjkxOTk4MX0.wssz4-wycroBQANdQVuquwETknyS6XLM8hstahHYGfc'
    });
    return this.http.put(this.URL_API + `/${paciente._id}`, paciente, {headers});
  }

  deletePaciente(_id: string){
    const headers = new HttpHeaders({
      'x-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmE2YjYyNGY1MmZmMDAwMTdiOWJkMGEiLCJpYXQiOjE2MDY4NzY3ODEsImV4cCI6MTYwNjkxOTk4MX0.wssz4-wycroBQANdQVuquwETknyS6XLM8hstahHYGfc'
    });
    return this.http.delete(this.URL_API +  `/${_id}`, {headers})
  }
}
