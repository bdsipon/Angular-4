import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent  {

  form:FormGroup;
  constructor(fb:FormBuilder){
    this.form=fb.group({

      oldPassword:['',Validators.required],
      newPassword:['',Validators.required],
      ConfirmPassword:['',Validators.required]
    })
  }
get oldPassWord(){return this.form.get('oldPassword');}
get newPassword(){return this.form.get('newPassword');}
get confirmPassword(){return this.form.get('confirmPassword');}
}
