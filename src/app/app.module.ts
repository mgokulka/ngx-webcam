import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { CameraComponent } from "./capture/capture.component";
import { LenderDGTLOANComponent } from './lender-dgtloan/lender-dgtloan.component';
import { OnlyCameraComponent } from './only-camera/only-camera.component';
import { ChartsComponent } from './charts/charts.component';
import { GoogleChartsModule } from 'angular-google-charts';

@NgModule({
  declarations: [AppComponent, CameraComponent, LenderDGTLOANComponent, OnlyCameraComponent, ChartsComponent],
  imports: [BrowserModule, FormsModule,GoogleChartsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
