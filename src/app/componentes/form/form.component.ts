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
      password:['', Validators.required],
      email: ['', Validators.compose([Validators.email, Validators.required])],
      direccion: ['', Validators.required],
      ciudad: ['', Validators.required],
      estado: ['', Validators.required],
      postal: ['', Validators.required]
    
    })
  }
  logFrml: FormGroup
  passwordIsValid = false;

  ngOnInit(): void {
    this.logFrml = this._builder.group({
      password: ['', Validators.required]
  });
  }

  enviar(values){
    console.log(values);
  }

  passwordValid(event) {
    this.passwordIsValid = event;
  }

}




