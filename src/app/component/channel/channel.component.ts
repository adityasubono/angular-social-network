import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.css']
})
export class ChannelComponent implements OnInit {
  @Input() name: string | undefined;
  @Input() isSubscribed: boolean | undefined;
  @Input() picture: string | undefined;

  constructor() {}

  ngOnInit() {}
}
