import { Component, OnInit } from '@angular/core';
import { Customer } from '../customers/customer';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
  ValidatorFn,
} from '@angular/forms';

function ratingRange(c: AbstractControl): { [key: string]: boolean } | null {
  if (c.value != undefined && (isNaN(c.value) || c.value < 1 || c.value > 5)) {
    return { range: true };
  }
  return null;
}

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styles: [],
})
export class ClientComponent implements OnInit {
  pageTitle = 'Reactive form model';

  clientForm!: FormGroup;
  customer = new Customer();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.clientForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.maxLength(50)]],
      email: [
        '',
        [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+')],
      ],
      phone: '',
      notification: 'email',
      rating: ['', ratingRange],
      sendCatalog: true,
    });
  }

  save() {
    console.log(this.clientForm);
    console.log('Saved: ' + JSON.stringify(this.clientForm.value));
  }

  populateTestData() {
    this.clientForm.patchValue({
      firstName: 'Tom',
      lastName: 'Jones',
      email: 'tom@jones.com',
      phone: '+1234567890',
      notification: 'email',
      rating: '',
      sendCatalog: false,
    });
  }

  setNotification(notifyVia: string): void {
    const phoneControl = this.clientForm.get('phone');
    if (notifyVia === 'text') {
      phoneControl?.setValidators(Validators.required);
    } else {
      phoneControl?.clearValidators();
    }
    phoneControl?.updateValueAndValidity();
  }
}
