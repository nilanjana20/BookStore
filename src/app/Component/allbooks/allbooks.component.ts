import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/Services/bookService/book.service';

@Component({
  selector: 'app-allbooks',
  templateUrl: './allbooks.component.html',
  styleUrls: ['./allbooks.component.scss']
})
export class AllbooksComponent implements OnInit {
  booklist: any[]=[];

  constructor(private book:BookService, private router:Router) { }

  ngOnInit(): void {
    this.getallbooks()
    console.log("books",this.getallbooks);
    
  }

  getallbooks(){
    this.book.getallbooks().subscribe((res:any)=>{
      console.log("res ===",res);
      this.booklist=res.result
      console.log("booklist fetched",this.booklist);
      
    }, error=>{
      console.log(error);
    })
  }

  quickview(book:any){
    console.log("book id", book._id);
    
    localStorage.setItem('bookId', book._id);
    this.router.navigateByUrl('dashboard/quickview/' +book._id)

  }
  
}
