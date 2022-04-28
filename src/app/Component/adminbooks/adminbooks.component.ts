import { Component, OnInit, TemplateRef } from '@angular/core';
import { BookService } from 'src/app/Services/bookService/book.service';

@Component({
  selector: 'app-adminbooks',
  templateUrl: './adminbooks.component.html',
  styleUrls: ['./adminbooks.component.scss']
})
export class AdminbooksComponent implements OnInit {
  booklist: any[]=[];

  constructor(private book:BookService) { }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(){
    this.book.getallbooks().subscribe((res:any)=>{
      console.log("hi res",res);
      this.booklist=res.result;
      console.log("books list",this.booklist);
      
    }, error=>{
      console.log(error); 
    })
  }

  
}


