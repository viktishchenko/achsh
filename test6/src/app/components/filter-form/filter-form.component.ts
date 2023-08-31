import { Component } from '@angular/core';

@Component({
  selector: '.app-filter-form',
  templateUrl: './filter-form.component.html',
  styleUrls: ['./filter-form.component.scss'],
})
export class FilterFormComponent {
  value = ' ';
  phoneValue = ' ';
  selectedOption = 'one';
  emailValue = ' ';
  selectedOptionStatus = 'one';

  filteredForm() {
    console.log('SUBMIT!');
  }

  applyChanges() {
    console.log('APPLY!');
  }

  cancelChanges() {
    console.log('CANCEL!');
  }

  resetChanges() {
    console.log('RESET!');
  }
}
