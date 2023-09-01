import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-bibingka',
  templateUrl: './bibingka.page.html',
  styleUrls: ['./bibingka.page.scss'],
})
export class BibingkaPage implements OnInit {

  constructor(
    private route: Router,
    ) { }
  
    ngOnInit() {
    }
    
    async home() {
      this.route.navigate(['./home']);
    }
  }

