import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-others',
  templateUrl: './others.page.html',
  styleUrls: ['./others.page.scss'],
})
export class OthersPage implements OnInit {

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
  async bukopie() {
    this.route.navigate(['./bukopie']);
  }
  async halohalo() {
    this.route.navigate(['./halo-halo']);
  }
}