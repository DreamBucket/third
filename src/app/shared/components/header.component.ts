import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(
    public sharedService: SharedService,
  ) { }

  ngOnInit(): void {
  }

}
