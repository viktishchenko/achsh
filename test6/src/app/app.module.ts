import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './services/angular-material-custom-theme';
import { AccountBtnComponent } from './components/account-btn/account-btn.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { SidenavContentComponent } from './components/sidenav-content/sidenav-content.component';
import { AgentCardsComponent } from './pages/agent-cards/agent-cards.component';
import { AgentContactsComponent } from './pages/agent-contacts/agent-contacts.component';
import { SharedModule } from './services/shared.module';
import { FilterFormComponent } from './components/filter-form/filter-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountBtnComponent,
    ToolbarComponent,
    SidenavComponent,
    SidenavContentComponent,
    AgentCardsComponent,
    AgentContactsComponent,
    FilterFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
