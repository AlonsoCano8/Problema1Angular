import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Problwma1Angular';
  name = 'Martin';

  onSaludar(mensaje){
    console.log(mensaje);
  }
}
