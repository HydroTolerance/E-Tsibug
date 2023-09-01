import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    public modalCtrl: ModalController,
    private route: Router,
  ) { }
  

  ngOnInit() {
  }
  
  async home() {
    this.route.navigate(['./home']);
    
  }
  async dismiss() {
    this.route.navigate(['./welcome']);
    
  }
}