import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductListComponent } from './views/products/product-list/product-list.component';
import { ConvertToSpacePipe } from './shared/convert-to-space.pipe';
import { StarsComponent } from './shared/stars.component';
import { ProductDetailComponent } from './views/products/product-detail/product-detail.component';
import { WelcomeComponent } from './views/home/welcome.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacePipe,
    StarsComponent,
    ProductDetailComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule, WelcomeComponent, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
