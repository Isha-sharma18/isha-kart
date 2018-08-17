import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Data } from '../data';
import { FlipkartService } from '../flipkart.service';
@Component({
  selector: 'app-middle',
  templateUrl: './middle.component.html',
  styleUrls: ['./middle.component.css']
})
export class MiddleComponent implements OnInit {
showItem;
  constructor(private myservice:FlipkartService,private data:Data,private routes:Router) { 
    this.showItem=data.badminton
  }
 

  ngOnInit() {
    this.myservice.mydata.subscribe(res =>{
      this.showItem=res
  })

}
cart=[];
add(item){
  this.cart.push(item);
 // console.log(this.cart)
 
}
checkout()
{
  this.myservice.Allitem =this.cart;
  if(this.cart.length>0){
    this.routes.navigate(['/Checkout'])
    
  }
  else{
    alert('Cart is Empty')
  }
}

}
