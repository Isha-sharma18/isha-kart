import { Component, OnInit } from '@angular/core';
import {Data} from '../data'
import { FlipkartService } from '../flipkart.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private service:FlipkartService,private data:Data) { }

  ngOnInit() {
  }
  
  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

 closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
show(option){
  if(option ==='badminton zone'){
    this.service.getData(this.data.badminton)
    
  }  
  if(option ==='clothes'){
    this.service.getData(this.data.clothing)
  } 
  if(option ==='heels'){
    this.service.getData(this.data.heels)
  } 
  if(option ==='bags'){
    this.service.getData(this.data.bags)
  }
  // if(option ==='Sports'){
  //   this.service.getData(this.data.Sports)
  // }
     
}

}



