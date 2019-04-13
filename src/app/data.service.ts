import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}

  getMenu() {
    return this.http.get('https://api.myjson.com/bins/1c5xsi');
  }

}
