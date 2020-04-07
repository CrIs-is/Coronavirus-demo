import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeInfoService {

  constructor(private http: HttpClient) { }
  getUsers() {
    const headers = new HttpHeaders({
      'x-rapidapi-host': 'covid-193.p.rapidapi.com',
      'x-rapidapi-key': 'a7a5ef178bmsh9e1b393a337e6bcp1da7b3jsna558f8d18712'
    });
    const options = {
      headers
    };

    return this.http.get('https://covid-193.p.rapidapi.com/history?country=Colombia', options );
  }

  getGlobal() {
    const headers = new HttpHeaders({
      'x-rapidapi-host': 'covid-193.p.rapidapi.com',
      'x-rapidapi-key': 'a7a5ef178bmsh9e1b393a337e6bcp1da7b3jsna558f8d18712'
    });
    const options = {
      headers
    };

    return this.http.get('https://covid-193.p.rapidapi.com/history?country=all', options);
  }
}
