import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sinigang',
  templateUrl: './sinigang.page.html',
  styleUrls: ['./sinigang.page.scss'],
})
export class SinigangPage implements OnInit {

  constructor(
    private route: Router,
    ) { }
  
    ngOnInit() {
    }
    
    async home() {
      this.route.navigate(['./home']);
    }
  }