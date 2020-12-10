import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  constructor(
    private router: Router,
    public sharedService: SharedService,
  ) { }

  ngOnInit(): void {
  }

  explore(): void {
    this.router.navigate(['/explore']);
  }

  mypage(): void {
    this.router.navigate(['/mypage']);
  }

  add(): void {
    this.router.navigate(['/explore/add']);
  }

}
