import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/Services/dataService/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  cartQuantity:any;

  constructor(private dataservice:DataService,private router:Router) { }

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () =>{
      return false;
    }
    this.dataservice.store.subscribe(res=>this.cartQuantity=res);
    
  }

  updateText(filteredString: any){
    console.log("string msg", filteredString.target.value);
    this.dataservice.updateData(filteredString.target.value);
  }
}
