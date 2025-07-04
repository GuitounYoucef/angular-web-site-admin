import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-stat-card',
    templateUrl: './stat-card.component.html',
    styleUrls: ['./stat-card.component.css'],
    imports: [CommonModule]
})
export class StatCardComponent implements OnInit {

  @Input() statTitle!: string;
  @Input() TitleBgColor: string;
  @Input() count!: number;

  constructor() { }

  ngOnInit() {
  }

}
