import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bukopie',
  templateUrl: './bukopie.page.html',
  styleUrls: ['./bukopie.page.scss'],
})
export class BukopiePage implements OnInit {

  constructor(
    private route: Router,
    ) { }
  
    ngOnInit() {
    }
    
    async home() {
      this.route.navigate(['./home']);
    }
  }
