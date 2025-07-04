import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-post-view',
    templateUrl: './post-view.component.html',
    styleUrls: ['./post-view.component.css'],
    imports: [RouterOutlet]
})
export class PostViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
