import { Component, OnInit } from '@angular/core';
import { Customer } from '../customers/customer';
import { FormGroup, FormBuilder } from '@angular/forms';

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
      firstName: '',
      // firstName: { value: 'n/a', disabled: true },
      lastName: '',
      email: '',
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
      // email: 'tom@jones.com',
      sendCatalog: false,
    });
  }
}
