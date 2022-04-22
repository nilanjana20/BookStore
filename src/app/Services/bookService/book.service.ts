import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  token: any;

  constructor(private httpService:HttpService) { 
    this.token=localStorage.getItem('token')
  }

  getallbooks(){
    console.log("token",this.token);

   let header ={
     headers: new HttpHeaders({
       'Content-type': 'application/json',
        'x-access-token': this.token
     })
   }
   return this.httpService.getService('bookstore_user/get/book', true,header)
 }

 addWishList(id:any){
  console.log("token",this.token);

 let header ={
   headers: new HttpHeaders({
     'Content-type': 'application/json',
     'x-access-token': this.token
    })
 }
 return this.httpService.postService('/bookstore_user/add_wish_list/'+id,{},true,header)
}

getWishList(){
  console.log("token",this.token);

 let header ={
   headers: new HttpHeaders({
     'Content-type': 'application/json',
      'x-access-token': this.token
   })
 }
 return this.httpService.getService('/bookstore_user/get_wishlist_items/', true,header)
}

removeWishList(id:any){
  let header ={
    headers: new HttpHeaders({
      'Content-type': 'application/json',
       'x-access-token': this.token
    })
  }
  return this.httpService.deleteService('bookstore_user/remove_wishlist_item/'+id, {}, true,header)
}

addCartItems(id:any){
  console.log("token",this.token);

 let header ={
   headers: new HttpHeaders({
     'Content-type': 'application/json',
     'x-access-token': this.token
    })
 }
 return this.httpService.postService('/bookstore_user/add_cart_item/'+id,{},true,header)
}

getCartItems(){
  console.log("token",this.token);

 let header ={
   headers: new HttpHeaders({
     'Content-type': 'application/json',
      'x-access-token': this.token
   })
 }
 return this.httpService.getService('/bookstore_user/get_cart_items/', true,header)
}

cartItemQuantity(id:any,data:any){
  console.log("token",this.token);

 let header ={
   headers: new HttpHeaders({
     'Content-type': 'application/json',
      'x-access-token': this.token
   })
 }
  return this.httpService.putService('bookstore_user/cart_item_quantity/'+id, data, true,header)
}

removeCartItem(id:any){
  console.log("token",this.token);

 let header ={
   headers: new HttpHeaders({
     'Content-type': 'application/json',
      'x-access-token': this.token
   })
 }
  return this.httpService.deleteService('bookstore_user/remove_cart_item/'+id, {}, true, header)
}

customerDetails(data:any){
  let header ={
    headers: new HttpHeaders({
      'Content-type': 'application/json',
       'x-access-token': this.token
    })
  }
  return this.httpService.putService('bookstore_user/edit_user/', data, true, header)
}

addOrder(data:any){
  let header ={
    headers: new HttpHeaders({
      'Content-type': 'application/json',
      'x-access-token': this.token
     })
  }
  return this.httpService.postService('bookstore_user/add/order',data, true, header ) 
  }

  addFeedback(id:any, data:any){
    let header ={
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'x-access-token': this.token
       })
    }
    return this.httpService.postService('/bookstore_user/add/feedback/'+id, data, true, header)
  }

  getFeedback(id:any){
    let header ={
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'x-access-token': this.token
       })
    }
    return this.httpService.getService('/bookstore_user/get/feedback/'+id, true, header)
  }


}
