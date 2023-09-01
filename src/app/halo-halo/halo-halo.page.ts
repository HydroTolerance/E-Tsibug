import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-halo-halo',
  templateUrl: './halo-halo.page.html',
  styleUrls: ['./halo-halo.page.scss'],
})
export class HaloHaloPage implements OnInit {

    constructor(
      private route: Router,
      ) { }
    
      ngOnInit() {
      }
      
      async home() {
        this.route.navigate(['./home']);
      }
    }