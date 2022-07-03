import { Component, OnInit, SecurityContext } from '@angular/core';
import { persona } from 'src/app/Model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-acrkde',
  templateUrl: './acrkde.component.html',
  styleUrls: ['./acrkde.component.css']
})
export class AcrkdeComponent implements OnInit {
  persona: persona = new persona("","","");

  constructor(public personaService: PersonaService) {  }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => {this.persona = data})
  }
  //lo que dice el boton
  element=false;
  showData(){
    return(this.element=true);
  }
  hideData(){
    return(this.element= false);
  }
}