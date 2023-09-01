import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  async welcome() {
    this.route.navigate(['./logout']);
  }

  async home() {
    this.route.navigate(['./home']);
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
  async sinigang() {
    this.route.navigate(['./sinigang']);
  }
  async adobo() {
    this.route.navigate(['./adobo']);
  }
}