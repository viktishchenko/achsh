import { Component, OnInit } from '@angular/core';
import { Customer } from '../customers/customer';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
  ValidatorFn,
} from '@angular/forms';
import { debounceTime } from 'rxjs';

function emailMatcher(c: AbstractControl) {
  let emailControl = c.get('email');
  let confirmControl = c.get('confirmEmail');
  if (emailControl?.pristine || confirmControl?.pristine) {
    return null;
  }
  if (emailControl?.value === confirmControl?.value) {
    return null;
  }
  return { match: true };
}

function ratingRange(min: number, max: number): ValidatorFn {
  return (c: AbstractControl): { [key: string]: boolean } | null => {
    if (
      c.value != undefined &&
      (isNaN(c.value) || c.value < min || c.value > max)
    ) {
      return { range: true };
    }
    return null;
  };
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
  emailMessage!: string;

  private validationMessages: any = {
    required: 'Please enter your email address.',
    pattern: 'Please enter a valid email address.',
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.clientForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.maxLength(50)]],
      emailGroup: this.fb.group(
        {
          email: [
            '',
            [
              Validators.required,
              Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+'),
            ],
          ],
          confirmEmail: ['', Validators.required],
        },
        { validators: emailMatcher }
      ),
      phone: '',
      notification: 'email',
      rating: ['', ratingRange(1, 5)],
      sendCatalog: true,
      addresses: this.fb.group({
        addressType: 'home',
        street1: '',
        street2: '',
        city: '',
        state: '',
        zip: '',
      }),
    });

    //--- Observable watching notification ---//
    this.clientForm.get('notification')?.valueChanges.subscribe((value) => {
      // console.log('value>>', value); // text/email
      this.setNotification(value);
    });

    //--- Observable watcher messages---//
    const emailControl = this.clientForm.get('emailGroup.email');
    emailControl?.valueChanges.pipe(debounceTime(1000)).subscribe((value) => {
      this.setMessage(emailControl);
    });
  }

  setMessage(c: AbstractControl): void {
    this.emailMessage = '';
    if ((c.touched || c.dirty) && c.errors) {
      this.emailMessage = Object.keys(c.errors)
        .map((key) => {
          console.log('key>>', key);
          console.log(
            'Boolean(this.emailMessage)>>',
            Boolean(this.emailMessage)
          );
          return this.validationMessages[key];
        })
        .join(' ');
    }
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
