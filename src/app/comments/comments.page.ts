import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.page.html',
  styleUrls: ['./comments.page.scss'],
})
export class CommentsPage implements OnInit {

    constructor(
  private route: Router,
  ) { }

  ngOnInit() {
  }
  
  async home() {
    this.route.navigate(['./home']);
  }
}
