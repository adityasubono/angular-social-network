import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  constructor(private http: HttpClient) {}

  getVideos() {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    let url =
        'https://technical-test-4b097-default-rtdb.asia-southeast1.firebasedatabase.app/videos.json';

    return this.http
        .get(url, {
          headers
        })
        .pipe(
            map(response => {
              let res = JSON.parse(JSON.stringify(response));
              return res;
            })
        );
  }
}
