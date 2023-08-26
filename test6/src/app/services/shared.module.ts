import { NgModule } from '@angular/core';
import { BackBtnComponent } from '../components/back-btn/back-btn.component';
import { AngularMaterialModule } from './angular-material-custom-theme';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [BackBtnComponent],
  imports: [AngularMaterialModule, HttpClientModule],
  exports: [BackBtnComponent],
})
export class SharedModule {}
