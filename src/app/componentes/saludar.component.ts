import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component (
    {
        selector: 'saludar-app',
        templateUrl: './saludar.component.html',
        styleUrls: ['./saludar.component.css'] 
    }
)

export class SaludarComponent{
    @Input() nombre:string = "Yaneli";
    @Output() saludar: EventEmitter<string> = new EventEmitter<string>();

    public nombres: Array<string>= [];
    public nombreLista:string = "Ariana";
    
    constructor(){}

    onClick(){
        this.saludar.emit('¡Hola desde el componente hijo!');
    }

    onButtonClick(lista){
        this.nombres.push(lista);
        lista = '';
        console.log(this.nombres);
   }
}
