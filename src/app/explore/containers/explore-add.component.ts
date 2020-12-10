import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../../shared/shared.service';
import { ExploreService } from '../explore.service';
import { DreamForm } from '../models/explore.model';

@Component({
  selector: 'app-explore-add',
  templateUrl: './explore-add.component.html',
  styleUrls: ['./explore-add.component.scss']
})
export class ExploreAddComponent implements OnInit {
  constructor(
    public exploreService: ExploreService,
    public sharedService: SharedService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.sharedService.title = '버킷리스트';
    this.sharedService.view = 'form';
  }

  submit(data: DreamForm): void {
    this.exploreService.add(data);
    this.router.navigate(['/explore']);
  }

}
