import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubAgentsRoutingModule } from './sub-agents-routing.module';
import { SubAgentsComponent } from './sub-agents.component';

@NgModule({
  declarations: [SubAgentsComponent],
  imports: [CommonModule, SubAgentsRoutingModule],
})
export class SubAgentsModule {}
