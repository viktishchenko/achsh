import { Component } from '@angular/core';

@Component({
  selector: 'app-agent-cards',
  templateUrl: './agent-cards.component.html',
  styleUrls: ['./agent-cards.component.scss'],
})
export class AgentCardsComponent {
  title = 'Настройка учетных записей сотрудников контрагента';

  addUser() {
    console.log('ADD USER!');
  }

  unBlockUser() {
    console.log('UNBLOCK USER!');
  }

  blockUser() {
    console.log('BLOCK USER!');
  }

  filteredUser() {
    console.log('filtered USER!');
  }
}
