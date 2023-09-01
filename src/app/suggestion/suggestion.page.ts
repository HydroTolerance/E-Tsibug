import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-suggestion',
  templateUrl: './suggestion.page.html',
  styleUrls: ['./suggestion.page.scss'],
})
export class SuggestionPage implements OnInit {

  constructor(
    public modalCtrl: ModalController,
    private route: Router,
  ) { }

  ngOnInit() {
  }
  
  async comment() {
    this.route.navigate(['./comments']);
  }

  async dismiss() {
    await this.modalCtrl.dismiss();
  }
}
