import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { ProductListComponent } from "./views/products/product-list/product-list.component";
import { ProductDetailComponent } from "./views/products/product-detail/product-detail.component";
import { WelcomeComponent } from "./views/home/welcome.component";
import { AboutComponent } from "./views/about/about/about.component";

const routes: Routes = [
  { path: "products", component: ProductListComponent },
  { path: "products/:id", component: ProductDetailComponent },
  { path: "about", component: AboutComponent },
  { path: "welcome", component: WelcomeComponent },
  { path: "", redirectTo: "welcome", pathMatch: "full" },
  { path: "**", redirectTo: "welcome", pathMatch: "full" },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
