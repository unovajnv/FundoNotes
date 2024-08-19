import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
// export class HttpService {

//   constructor(private http: HttpClient) { }

//   getDataFromApi(){
//     // return this.http.get(environment.BaseUrl);
//     return this.http.get('https://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList?access_token=bb7Pl5YLGSCAFo0mOVlkP7LWtjysIlNLtBVHxqJWgwGReCEiaJqa9xIJS8JpfWzu');
//   }
// }

export class HttpService {
  BASE_URL = 'https://fundoonotes.incubation.bridgelabz.com/api';
  constructor(private http: HttpClient) {}
  postAPIcall(endpoint: string, data: any) {
    return this.http.post(this.BASE_URL + endpoint, data);
  }

  getAPICall(endpoint: string) {
    console.log(this.BASE_URL, endpoint);
    return this.http.get(this.BASE_URL + endpoint);
  }
}
