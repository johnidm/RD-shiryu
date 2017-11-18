import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';

declare var Seyia: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public constructor(private titleService: Title, private router: Router ) {
    this.titleService.setTitle( 'Shiryu' );

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        Seyia.trackUrl(window.location.href);
      }
    });
  }
}
