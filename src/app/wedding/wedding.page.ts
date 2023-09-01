import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wedding',
  templateUrl: './wedding.page.html',
  styleUrls: ['./wedding.page.scss'],
})
export class WeddingPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }


  async home() {
    this.route.navigate(['./home']);
  }
  async welcome() {
    this.route.navigate(['./logout']);
  }
  async wedding() {
    this.route.navigate(['./wedding']);
  }
  async others() {
    this.route.navigate(['./others']);
  }
  async fiesta() {
    this.route.navigate(['./fiesta']);
  }
  async suggestion() {
    this.route.navigate(['./suggestion']);
  }
  async yemacake() {
    this.route.navigate(['./yemacake']);
  }
  async lechon() {
    this.route.navigate(['./lechon']);
  }
}
