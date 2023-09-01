import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoginPage } from '../login/login.page';
import { SignupPage } from '../signup/signup.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  constructor(
    public modalCtrl: ModalController,
    private route: Router,
  ) { }

  ngOnInit() {
  }

  async login() {
    this.route.navigate(['./login']);
  }

  async signup() {
    this.route.navigate(['./signup']);
  }

}
