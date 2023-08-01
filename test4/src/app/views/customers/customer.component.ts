import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Customer } from './customer';

@Component({
  templateUrl: './customer.component.html',
  styles: [],
})
export class CustomerComponent {
  pageTitle = 'Template-driven form';

  customer = new Customer();

  save(customerForm: NgForm): void {
    console.log(customerForm.form);
    console.log('Saved: ' + JSON.stringify(customerForm.value));
  }
}
