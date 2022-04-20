import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookService } from 'src/app/Services/bookService/book.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems:any;
  cartItemsCount:any;
  book_quantity:number=1;

  show:boolean=true;
  showCustomerDetails:boolean = false;
  address:boolean = true;

  showSummeryDetails:boolean = false;
  summery:boolean = true;
  customerForm!:FormGroup;
  submitted = false;
  continue:boolean = true;

  constructor(private book:BookService,private formbuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getAddToCart();

    this.customerForm = this.formbuilder.group({
      fullName: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
    })
  }

  getAddToCart(){
    this.book.getCartItems().subscribe((res:any)=>{
      console.log("Cart items received", res);
      this.cartItems=res.result;
      this.cartItemsCount=res.result.length;
      console.log("cart items",this.cartItems);
      console.log("value",this.cartItemsCount);
      
    })
 }

 minus(){
  if(this.book_quantity>1){
   this.book_quantity--
  }
}

plus(){
 this.book_quantity++
}

removeItem(item:any){
   this.book.removeCartItem(item._id).subscribe((res:any)=>{
     console.log("Item removed",res);
   }, error=>{
    console.log(error);
  })
}

showDetails(){
  if(this.showCustomerDetails == false){
    this.showCustomerDetails = true
    this.address = false;
  }
  this.show = false;
}

onSubmit(){
  this.submitted = true;
  if (this.customerForm.valid) {
      console.log("valid data", this.customerForm.value);
      let data={
        addressType: "Home",
        fullAddress: this.customerForm.value.address,
        city: this.customerForm.value.city,
        state: this.customerForm.value.state
      }
      this.book.customerDetails(data).subscribe((response:any)=>{
        console.log(response);
      }, (error: any) =>{
        console.log(error);
      })
  } else {
    console.log("Fill the address details");
  }
}

showOrderDetails(){
  if(this.showSummeryDetails == false && this.customerForm.valid){
    this.showSummeryDetails = true
    this.summery = false;
  }
  this.continue= false
}

ordersummary() {

}


}
