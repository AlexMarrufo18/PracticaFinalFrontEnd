import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Medico } from '../models/medico';
import { mapToMapExpression } from '@angular/compiler/src/render3/util';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {
  selectedMedico: Medico;
  medicos: Medico[];
  readonly URL_API = 'https://practicamongodb.herokuapp.com/api/medicos';

  constructor(private http: HttpClient) {
    this.selectedMedico= new Medico();
   }

   getMedicos(){
    const headers = new HttpHeaders({
      'x-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmE2YjYyNGY1MmZmMDAwMTdiOWJkMGEiLCJpYXQiOjE2MDY4NzY3ODEsImV4cCI6MTYwNjkxOTk4MX0.wssz4-wycroBQANdQVuquwETknyS6XLM8hstahHYGfc'
    });
    return this.http.get<Medico>(this.URL_API,{headers}).pipe(map(data => {
      return Object.values(data);
    }));
  }

  postMedico(medico: Medico){
    const headers = new HttpHeaders({
      'x-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmE2YjYyNGY1MmZmMDAwMTdiOWJkMGEiLCJpYXQiOjE2MDY4NzY3ODEsImV4cCI6MTYwNjkxOTk4MX0.wssz4-wycroBQANdQVuquwETknyS6XLM8hstahHYGfc'
    });
    return this.http.post(this.URL_API, Medico,{headers});
  }

  putMedico(medico: Medico){
    const headers = new HttpHeaders({
      'x-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmE2YjYyNGY1MmZmMDAwMTdiOWJkMGEiLCJpYXQiOjE2MDY4NzY3ODEsImV4cCI6MTYwNjkxOTk4MX0.wssz4-wycroBQANdQVuquwETknyS6XLM8hstahHYGfc'
    });
    return this.http.put(this.URL_API + `/${medico._id}`, medico, {headers});
  }

  deleteMedico(_id: string){
    const headers = new HttpHeaders({
      'x-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmE2YjYyNGY1MmZmMDAwMTdiOWJkMGEiLCJpYXQiOjE2MDY4NzY3ODEsImV4cCI6MTYwNjkxOTk4MX0.wssz4-wycroBQANdQVuquwETknyS6XLM8hstahHYGfc'
    });
    return this.http.delete(this.URL_API +  `/${_id}`, {headers})
  }

}
