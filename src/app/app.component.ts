import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgSwitch, NgSwitchDefault, NgSwitchCase } from '@angular/common';

import { MainComponent } from './Modules/Core/Main.component';



@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: true,
    imports: [NgSwitch, NgSwitchDefault, NgSwitchCase, RouterOutlet, MainComponent]
})
export class AppComponent {
  title = 'serverfront-micro-serv';
}
