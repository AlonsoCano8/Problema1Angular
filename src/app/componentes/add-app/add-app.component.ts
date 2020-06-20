import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-app',
  templateUrl: './add-app.component.html',
  styleUrls: ['./add-app.component.css']
})
export class AddAppComponent implements OnInit {
  info:Array<String> = [];

  constructor(private _builder: FormBuilder
  ) {
    this.addFormulario=this._builder.group({
      id:['', Validators.compose([Validators.required, Validators.min(100),Validators.max(105)])],
      nombre:['', Validators.required],
      gen:['', Validators.required],
      year:['', Validators.compose([Validators.required, Validators.min(1980), Validators.max(2010)])]
    })
    }
    addFormulario:FormGroup
  ngOnInit(): void {
  }

  add(values){
    this.info.push(values);
    this.addFormulario.reset();
    console.log(this.info);
  }
}
