import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'; 
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { PacienteComponent } from './components/paciente/paciente.component';
import { from } from 'rxjs';
import { MedicoComponent } from './components/medico/medico.component';
import { FooterComponent } from './components/footer/footer.component';
import { SocialComponent } from './components/social/social.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    PacienteComponent,
    MedicoComponent,
    FooterComponent,
    SocialComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
