import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'Problwma1Angular';
  name = 'Leo';
  show:boolean = false;
  buttonName:any = 'Agregar';
  passwordForm: FormGroup;

  onSaludar(mensaje){
    console.log(mensaje);
  }

 mostrar(){
    
    this.show = !this.show;
    if(this.show){  
      this.buttonName = "Cancelar";
    }else{
      this.buttonName = "Guardar";
    }
  }

  validando(texto:string){
    return{
      'weak': texto.length < 4, 
      'medium': texto.length >=4 && texto.length <=7,
      'strong': texto.length >7
    }

  }
  


}

