import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';
import {HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService:HttpService) { }

  register(reqdata:any){
  
    let header ={
      headers: new HttpHeaders({
        'Content-type': 'application/json'      
      })
    }
    return this.httpService.postService('/bookstore_user/registration',reqdata,false,header)
  }

  login(reqdata:any){
  
    let header ={
      headers: new HttpHeaders({
        'Content-type': 'application/json'      
      })
    }
    return this.httpService.postService('bookstore_user/login',reqdata,false,header)
  }

  adminRegister(data:any){
    let header ={
      headers: new HttpHeaders({
        'Content-type': 'application/json'      
      })
    }
    return this.httpService.postService('bookstore_user/admin/registration', data, false, header)
  }

  adminLogin(data:any){
    let header ={
      headers: new HttpHeaders({
        'Content-type': 'application/json'      
      })
    }
    return this.httpService.postService('bookstore_user/admin/login', data, false, header)
  }
}
