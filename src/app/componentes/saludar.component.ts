import {Component, Input} from '@angular/core';

@Component (
    {
        selector: 'saludar-app',
        templateUrl: './saludar.component.html',
        styleUrls: ['./saludar.component.css'] 
    }
)

export class SaludarComponent{
    @Input() nombre:string = "Yaneli";
    constructor(){}

}
