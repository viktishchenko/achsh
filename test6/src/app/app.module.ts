import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

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
import { BackBtnComponent } from './components/back-btn/back-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountBtnComponent,
    ToolbarComponent,
    SidenavComponent,
    SidenavContentComponent,
    AgentCardsComponent,
    AgentContactsComponent,
    BackBtnComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
