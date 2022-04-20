import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/Services/bookService/book.service';

@Component({
  selector: 'app-quickview',
  templateUrl: './quickview.component.html',
  styleUrls: ['./quickview.component.scss']
})
export class QuickviewComponent implements OnInit {
  bookInfo: any;
  bookId:any;
  hide:boolean=false
  book_quantity:number=1;

  constructor(private book:BookService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getBookDetail();
    this.bookId=this.route.snapshot.params['id']
    // console.log("bookinfo received", this.bookInfo);
    
  }

  getBookDetail(){
    this.book.getallbooks().subscribe((res:any)=>{ 
      res.result.forEach((element:any) => {
        if(element._id == this.bookId){
          this.bookInfo = element;
          console.log("boofInfo", this.bookInfo);
        }  
      });
    }, error=>{
      console.log(error); 
    })
  }
  
  addWishList(){
    this.book.addWishList(this.bookId).subscribe((res:any)=>{
      console.log("wishlist created",res);
    }, error=>{
      console.log(error);
    })
  }

 switching(){
    if(this.hide==false){
       this.hide=true
    }
    else{
      this.hide=false
    }
 }

 minus(){
   if(this.book_quantity>1){
    this.book_quantity--
   }
   else if(this.book_quantity<=1){
     this.switching()
   }
 }

plus(){
  this.book_quantity++
}

addToCart(){
  this.book.addCartItems(this.bookId).subscribe((res:any)=>{
    console.log("cart items fetched",res);
  }, error=>{
    console.log(error);
  })
}


}
