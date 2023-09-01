import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { HomePage } from 'src/app/home/home.page';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.page.html',
  styleUrls: ['./comment.page.scss'],
})
export class CommentPage implements OnInit {

  constructor(
    public modalCtrl: ModalController,
    private route: Router,
  ) { }

  ngOnInit() {
  }
  
  async home() {
    this.route.navigate(['./login']);
  }

  async dismiss() {
    await this.modalCtrl.dismiss();
  }
}

