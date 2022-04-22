import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/Services/bookService/book.service';
import { DataService } from 'src/app/Services/dataService/data.service';

@Component({
  selector: 'app-allbooks',
  templateUrl: './allbooks.component.html',
  styleUrls: ['./allbooks.component.scss']
})
export class AllbooksComponent implements OnInit {
  booklist: any[]=[];
  booksCount:any;
  page:number = 1;

  filteredString = "";

  constructor(private book:BookService, private router:Router,private dataservice:DataService) { }

  ngOnInit(): void {
    this.getallbooks()
    console.log("books",this.getallbooks);
    this.dataservice.store.subscribe(x => this.filteredString = x);
    
  }

  getallbooks(){
    this.book.getallbooks().subscribe((res:any)=>{
      console.log("res ===",res);
      this.booklist=res.result
      this.booksCount=res.result.length;
      console.log("booklist fetched",this.booklist);
      console.log("booklist length",this.booksCount);
      
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
