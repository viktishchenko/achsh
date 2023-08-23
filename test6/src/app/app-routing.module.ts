import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgentCardsComponent } from './pages/agent-cards/agent-cards.component';
import { AgentContactsComponent } from './pages/agent-contacts/agent-contacts.component';

const routes: Routes = [
  { path: 'agent-cards', component: AgentCardsComponent },
  { path: 'agent-contacts', component: AgentContactsComponent },
  { path: '', redirectTo: 'agent-cards', pathMatch: 'full' },
  { path: 'sub-agents', loadChildren: () => import('./pages/sub-agents/sub-agents.module').then(m => m.SubAgentsModule) },
  { path: '**', redirectTo: 'agent-cards' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
