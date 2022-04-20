import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/Services/bookService/book.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  wishListCount:any;
  wishlist:any;
  constructor(private book:BookService) { }

  ngOnInit(): void {
    this.getWishListBook()
  }

getWishListBook(){
   this.book.getWishList().subscribe((res:any)=>{
     console.log("Wishlist items received", res);
     this.wishlist=res.result;
     this.wishListCount=res.result.length;
     console.log("wishlist",this.wishlist);
     console.log("value",this.wishListCount);
     
   })
}
deleteList(list:any){
   this.book.removeWishList(list.product_id._id).subscribe((res:any)=>{
    console.log("wishlist item deleted",res);
  }, error=>{
    console.log(error);
  })
}


}
