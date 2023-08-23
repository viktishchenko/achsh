import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubAgentsComponent } from './sub-agents.component';

const routes: Routes = [{ path: '', component: SubAgentsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubAgentsRoutingModule { }
