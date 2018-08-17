import { Component, OnInit } from '@angular/core';
import { FlipkartService } from '../flipkart.service';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  showItem;
  total=0;
    constructor(private myservice :FlipkartService) { 
      this.showItem=myservice.Allitem;
      console.log(this.showItem)
      this.showItem.forEach(element => {
        this.total +=element.cost;
      });
    }

  

  ngOnInit() {
  }

}
