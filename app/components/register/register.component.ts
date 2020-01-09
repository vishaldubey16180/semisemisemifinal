import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  

  formGroup: FormGroup;

  nameFormGroup: FormGroup;
  AddressFormGroup: FormGroup;

 

  /** Returns a FormArray with the name 'formArray'. */
  get formArray(): AbstractControl | null { return this.formGroup.get('formArray'); }

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formGroup = this._formBuilder.group({
      formArray: this._formBuilder.array([
        this._formBuilder.group({
          nameFormCtrl: ['', Validators.required],
          emailFormCtrl: ['', Validators.required],
          contactFormCtrl: ['', Validators.required],
          passwordFormCtrl: ['', Validators.required],
          confirmpasswordFormCtrl: ['', Validators.required],
        }),
        this._formBuilder.group({
          buildingnoFormCtrl: ['', Validators.email],
          streetnoFormCtrl: ['', Validators.email],
          localityFormCtrl: ['', Validators.email],
          pincodeFormCtrl: ['', Validators.email],
        }),
      ])
    });

    this.nameFormGroup = this._formBuilder.group({
      nameCtrl: ['', Validators.required],
      emailCtrl: ['', Validators.required],
      contactCtrl: ['', Validators.required],
      passwordCtrl: ['', Validators.required],
      confirmpasswordCtrl: ['', Validators.required],
    });

    this.AddressFormGroup = this._formBuilder.group({
      buildingnoCtrl: ['', Validators.email],
          streetnoCtrl: ['', Validators.email],
          localityCtrl: ['', Validators.email],
          pincodeCtrl: ['', Validators.email],
    });
  }

}
