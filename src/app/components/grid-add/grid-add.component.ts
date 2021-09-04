import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-add',
  templateUrl: './grid-add.component.html',
  styleUrls: ['./grid-add.component.css']
})
export class GridAddComponent implements OnInit {
  @Input() icon: string | undefined;
  @Input() firstWord: string | undefined;
  @Input() secondWord: string | undefined;

  constructor() {}

  ngOnInit() {}
}
