import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.css'],
  standalone: true,
  imports: [RouterOutlet]
})
export class PostViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
