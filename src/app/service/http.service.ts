import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { LoginComponent } from '../login/login.component';
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
  access_token = localStorage.getItem('access_token');
  constructor(private http: HttpClient) {}
  postAPIcall(endpoint: string,data: any) {
    // console.log(data);
  return this.http.post(this.BASE_URL + endpoint,data);
  }

  getAPICall(endpoint: string) {
     //console.log(this.BASE_URL, endpoint);
    return this.http.get(this.BASE_URL + endpoint);
  }

  addNotes(title:any, description:any){
    //console.log({title:String, description:String})
    return this.http.post(`${this.BASE_URL}/notes/addNotes?access_token=${localStorage.getItem('access_token')}`,{title, description})
  }

  deleteNote(data:any){
    console.log("https://fundoonotes.incubation.bridgelabz.com/api/notes/"+`${data.id}` +"?access_token="+`${this.access_token}`)
    console.log(data);
    return this.http.patch("https://fundoonotes.incubation.bridgelabz.com/api/notes/"+`${data.id}` +"?access_token="+`${this.access_token}`,data)
  }
}
