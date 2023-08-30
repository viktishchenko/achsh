import { Component } from '@angular/core';

@Component({
  selector: '.app-filter-form',
  templateUrl: './filter-form.component.html',
  styleUrls: ['./filter-form.component.scss'],
})
export class FilterFormComponent {
  value = ' ';
  filteredForm() {
    console.log('this form was submitted!');
  }
}
