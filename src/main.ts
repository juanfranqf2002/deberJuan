import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { MenulateralComponent } from './menulateral/menulateral.component';
import { PiepaginaComponent } from './piepagina/piepagina.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [
    CommonModule,
    CabeceraComponent,
    MenulateralComponent,
    PiepaginaComponent,
  ],
  templateUrl: './principal.html',
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
