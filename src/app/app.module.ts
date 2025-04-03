import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EugelterComponent } from './components/eugelter/eugelter.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { MdauComponent } from './components/mdau/mdau.component';
import { ChaukeComponent } from './components/chauke/chauke.component';
import { MahlankuComponent } from './components/mahlanku/mahlanku.component';
import { RamokgotsoaComponent } from './components/ramokgotsoa/ramokgotsoa.component';
import { HttpClientModule } from '@angular/common/http';
import { LandingComponent } from './components/landing/landing.component';
import { ReportsComponent } from './components/reports/reports.component'; 

@NgModule({
  declarations: [
    AppComponent,
    EugelterComponent,
    MdauComponent,
    ChaukeComponent,
    MahlankuComponent,
    RamokgotsoaComponent,
    LandingComponent,
    ReportsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
