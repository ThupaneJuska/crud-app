import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EugelterComponent } from './components/eugelter/eugelter.component';
import { MdauComponent } from './components/mdau/mdau.component';
import { ChaukeComponent } from './components/chauke/chauke.component';
import { MahlankuComponent } from './components/mahlanku/mahlanku.component';
import { RamokgotsoaComponent } from './components/ramokgotsoa/ramokgotsoa.component';
import { LandingComponent } from './components/landing/landing.component';
import { ReportsComponent } from './components/reports/reports.component';

const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'landing', component: LandingComponent, children: [
    { path: 'medications', component: EugelterComponent },
    { path: 'mdau', component: MdauComponent },
    { path: 'ramokgotsoa', component: RamokgotsoaComponent },
    { path: 'chauke', component: ChaukeComponent },
    { path: 'mahlanku', component: MahlankuComponent },
    { path: 'reports', component: ReportsComponent },
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
