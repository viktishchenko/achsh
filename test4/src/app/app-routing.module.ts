import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { WelcomeComponent } from './views/home/welcome.component';
import { PageNotFoundComponent } from './views/error-page/page-not-found.component';
import { CustomerComponent } from './views/customers/customer.component';
import { ClientComponent } from './views/clients/client.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: 'template-driven-forms', component: CustomerComponent },
      { path: 'reactive-form-model', component: ClientComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', component: PageNotFoundComponent },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
