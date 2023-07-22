import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ProductListComponent } from "./views/products/product-list/product-list.component";
import { ConvertToSpacePipe } from "./shared/convert-to-space.pipe";
import { StarsRatingComponent } from "./shared/stars-rating.component";
import { HttpClientModule } from "@angular/common/http";
import { ProductDetailComponent } from "./views/products/product-detail/product-detail.component";
import { WelcomeComponent } from "./views/home/welcome.component";
import { AppRoutingModule } from "./app-routing.module";
import { AboutComponent } from "./views/about/about/about.component";

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule, ProductListComponent,
        ConvertToSpacePipe,
        StarsRatingComponent,
        ProductDetailComponent,
        WelcomeComponent,
        AboutComponent],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
