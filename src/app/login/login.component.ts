import {Component, OnInit} from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [Location, { provide: LocationStrategy, useClass: PathLocationStrategy}]
})
export class LoginComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute,
              private location: Location) {

  }
  selectedIndex = 0;

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params) => {
      if (params.tab) {
        this.selectedIndex = params.tab;
      }
    });
  }

  updateUrl(selectedIndex: number): void {
    this.location.go('/login?tab=' + +selectedIndex);
  }

}
