import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Spot } from '../../explore/models/explore.model';

@Component({
  selector: 'app-mypage-datagrid',
  templateUrl: './mypage-datagrid.component.html',
  styleUrls: ['./mypage-datagrid.component.scss']
})
export class MypageDatagridComponent implements OnInit {
  @Input() data: Spot[];
  @Output() delete = new EventEmitter<string>();
  @Output() goto = new EventEmitter<Spot>();

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onEdit(id: string): void {
    this.router.navigate([`explore/${id}/edit`]);
  }

  onDelete(id: string): void {
    this.delete.emit(id);
  }

  onGoto(value: Spot): void {
    this.goto.emit(value);
  }

}
