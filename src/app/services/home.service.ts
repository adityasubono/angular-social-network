import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
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

  getPeoples() {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    let url =
      'https://technical-test-4b097-default-rtdb.asia-southeast1.firebasedatabase.app/peoples.json';

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

  getDocuments() {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    let url =
      'https://technical-test-4b097-default-rtdb.asia-southeast1.firebasedatabase.app/documents.json';

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

  getActivities() {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    let url =
      'https://technical-test-4b097-default-rtdb.asia-southeast1.firebasedatabase.app/activities.json';

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

  getChannels() {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    let url =
      'https://technical-test-4b097-default-rtdb.asia-southeast1.firebasedatabase.app/channels.json';

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

  private handleError(error: any) {
    let errMsg = error.message
      ? error.message
      : error.status
      ? `${error.status} - ${error.statusText}`
      : 'Server error';
    console.error(errMsg); // log to console instead
    return new Error(errMsg);
  }
}
