import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Component({
  selector: 'google-maps-demo',
  templateUrl: './google-maps-demo.component.html',
})
export class GoogleMapsDemoComponent implements OnInit {
  apiLoaded: Observable<boolean>;

  constructor(
    httpClient: HttpClient,
  ) {
    this.apiLoaded = httpClient.jsonp('https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE', 'callback')
    .pipe(
      map(() => true),
      catchError(() => of(false)),
    );
  }

  ngOnInit(): void {
  }

  // https://github.com/angular/components/blob/master/src/google-maps/map-marker/README.md

}
