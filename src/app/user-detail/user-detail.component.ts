import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, EmailValidator } from '@angular/forms';

import { User, Addresses, states } from '../data-model';
import { emailValidator } from '../../shared/CustomValidators';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  states = states;
  userFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.userFormGroup = this.formBuilder.group({
      name: ['Vinh', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, emailValidator()]],
      addresses: this.formBuilder.group({
        street: ['', [Validators.required]],
        city: '',
        state: this.states[0],
      }),
    });

  }

  ngOnInit() {
  }

}
