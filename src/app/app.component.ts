import { Component } from '@angular/core';

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

}
