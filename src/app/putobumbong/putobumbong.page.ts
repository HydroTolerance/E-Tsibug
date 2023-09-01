import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-putobumbong',
  templateUrl: './putobumbong.page.html',
  styleUrls: ['./putobumbong.page.scss'],
})
export class PutobumbongPage implements OnInit {

  constructor(
    private route: Router,
    ) { }
  
    ngOnInit() {
    }
    
    async home() {
      this.route.navigate(['./home']);
    }
  }
