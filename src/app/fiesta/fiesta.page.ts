import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fiesta',
  templateUrl: './fiesta.page.html',
  styleUrls: ['./fiesta.page.scss'],
})
export class FiestaPage implements OnInit {

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
  async bibingka() {
    this.route.navigate(['./bibingka']);
  }
  async putobumbong() {
    this.route.navigate(['./putobumbong']);
  }
}
