import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './views/home/welcome.component';
import { CustomerComponent } from './views/customers/customer.component';
import { PageNotFoundComponent } from './views/error-page/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { ClientComponent } from './views/clients/client.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PageNotFoundComponent,
    CustomerComponent,
    ClientComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
