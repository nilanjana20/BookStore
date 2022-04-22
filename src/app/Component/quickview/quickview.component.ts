import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/Services/bookService/book.service';
import { DataService } from 'src/app/Services/dataService/data.service';

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

  feedback:any;
  value:any;
  feedbackList:any;

  constructor(private book:BookService, private route:ActivatedRoute,private dataservice:DataService) { }

  ngOnInit(): void {
    this.getBookDetail();
    this.bookId=this.route.snapshot.params['id']
    // console.log("bookinfo received", this.bookInfo);
    this.getFeedback();

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
    this.book_quantity--;
    let data = {
      "quantityToBuy": this.book_quantity
    }
    this.book.cartItemQuantity(this.bookInfo._id, data).subscribe((res:any)=>{
      console.log("added to cart", this.book_quantity);
    }, error=>{
      console.log(error);
    })
   }
   else if(this.book_quantity<=1){
     this.switching()
   }
 }

plus(){
  this.book_quantity++

  let data = {
    "quantityToBuy": this.book_quantity
  }
  this.book.cartItemQuantity(this.bookInfo._id, data).subscribe((res:any)=>{
    console.log("added to cart", this.book_quantity);
  }, error=>{
    console.log(error);
  })
}


addToCart(){
  this.sendQuantiy(this.book_quantity)
  this.book.addCartItems(this.bookId).subscribe((res:any)=>{
    console.log("cart items fetched",res);
  }, error=>{
    console.log(error);
  })
}

addFeedback(){
  let data= {
    comment: this.feedback,
    rating: this.value
  }
  this.book.addFeedback(this.bookId, data).subscribe((res:any)=>{
    console.log(res);
  })
}

getFeedback(){
  console.log("feedback list",this.bookId);
  this.book.getFeedback(this.bookId).subscribe((res:any)=>{
    console.log("get feedback list",res.result);
    this.feedbackList = res.result;
  })
}

sendQuantiy(count:any){
  this.dataservice.updateData(count);
}

}
