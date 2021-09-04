import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {
  @Input() picture: string | undefined;
  @Input() name: string | undefined;
  @Input() description: string | undefined;
  @Input() actionCode: string | undefined;
  @Input() timestamp: string | undefined;

  constructor() {}

  ngOnInit() {}

  timestampHistory(timestamp: any) {
    var ts: Date = new Date(timestamp);
    var now: Date = new Date();

    return this.secondsToHms((now.getTime() - ts.getTime()) / 1000);
  }

  secondsToHms(d: number) {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor((d % 3600) / 60);
    var s = Math.floor((d % 3600) % 60);

    var hDisplay = h > 0 ? h + (h == 1 ? ' Jam ' : ' Jam ') : '';
    var mDisplay = m > 0 ? m + (m == 1 ? ' Menit ' : ' Menit ') : '';
    // var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
    return !(h == 0 && m == 0)
      ? hDisplay + mDisplay + ' lalu'
      : 'Kurang dari 1 menit';
  }
}
