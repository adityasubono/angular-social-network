import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  menus = [
    {
      display: 'Videos',
      url: '#'
    },
    {
      display: 'People',
      url: '#'
    },
    {
      display: 'Documents',
      url: '#'
    },
    {
      display: 'Events',
      url: '#'
    },
    {
      display: 'Communities',
      url: '#'
    },
    {
      display: 'Favorites',
      url: '#'
    },
    {
      display: 'Channels',
      url: '#'
    }
  ];
}
