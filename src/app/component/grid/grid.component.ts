import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  @Input() title: string | undefined;
  @Input() sub: string | undefined;
  @Input() view: number | undefined;
  @Input() picture: string | undefined;

  @Input() size: any;

  constructor() {}

  ngOnInit() {}
}
