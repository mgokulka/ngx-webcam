import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { AppComponent } from "./app.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CameraComponent } from "./capture/capture.component";
import { LenderDGTLOANComponent } from './lender-dgtloan/lender-dgtloan.component';
import { OnlyCameraComponent } from './only-camera/only-camera.component';
import { ChartsComponent } from './charts/charts.component';
import { ChartComponent } from './chart/chart.component';
import { StandAloneComponent } from './stand-alone/stand-alone.component';
import { Bs5PlaceholderComponent } from './bs5-placeholder/bs5-placeholder.component';
import { DateComponent } from './date/date.component';
import { MyFormComponent } from './my-form/my-form.component';
import { CacheDemoComponent } from './cache-demo/cache-demo.component';

@NgModule({
  declarations: [AppComponent, CameraComponent, LenderDGTLOANComponent, OnlyCameraComponent, ChartsComponent, ChartComponent, DateComponent, MyFormComponent],
  imports: [BrowserModule, FormsModule,StandAloneComponent,Bs5PlaceholderComponent,ReactiveFormsModule,CacheDemoComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
