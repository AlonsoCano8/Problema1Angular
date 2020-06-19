import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  constructor(private _builder: FormBuilder) { 
    this.logFrml=this._builder.group({
      nombre: ['', Validators.required],
      email: ['', Validators.compose([Validators.email, Validators.required])],
      direccion: ['', Validators.required],
      ciudad: ['', Validators.required],
      estado: ['', Validators.required],
      postal: ['', Validators.required]
    
    })
  }
  logFrml: FormGroup
  

  ngOnInit(): void {
  }
  enviar(values){
    console.log(values);
  }
}
