import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/dataService/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  cartQuantity:any;

  constructor(private dataservice:DataService) { }

  ngOnInit(): void {
    this.dataservice.store.subscribe(res=>this.cartQuantity=res);
    
  }

  updateText(filteredString: any){
    console.log("string msg", filteredString.target.value);
    this.dataservice.updateData(filteredString.target.value);
  }
}
