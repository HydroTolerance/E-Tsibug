import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-yemacake',
  templateUrl: './yemacake.page.html',
  styleUrls: ['./yemacake.page.scss'],
})
export class YemacakePage implements OnInit {

  constructor(
    private route: Router,
    ) { }
  
    ngOnInit() {
    }
    
    async home() {
      this.route.navigate(['./home']);
    }
  }
