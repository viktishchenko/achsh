import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ProductListComponent } from "./views/products/product-list/product-list.component";
import { ConvertToSpacePipe } from './shared/convert-to-space.pipe';
import { StarsRatingComponent } from './shared/stars-rating.component';

@NgModule({
  declarations: [AppComponent, ProductListComponent, ConvertToSpacePipe, StarsRatingComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
