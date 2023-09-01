import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adobo',
  templateUrl: './adobo.page.html',
  styleUrls: ['./adobo.page.scss'],
})
export class AdoboPage implements OnInit {

  constructor(
    private route: Router,
    ) { }
  
    ngOnInit() {
    }
    
    async home() {
      this.route.navigate(['./home']);
    }
  }