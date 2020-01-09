import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserRelatedService {

  constructor(private http:HttpClient) { }

  userLogin(id:string,password:string):Observable<boolean>{
    return null
  }

 




}
