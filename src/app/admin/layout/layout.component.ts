import { ElementSchemaRegistry } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {
  AlertifyService,
  MessageType,
  Position,
} from 'src/app/services/admin/alertify.service';

//Uygulamamnın angular.json'da yüklenmiş olan kütüphanelerden hangisinde böyle bir komut varsa burada bind etmiş oluyoruz.

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  constructor(private alertify: AlertifyService) {}

  ngOnInit(): void {}
  m() {
    // this.alertify.message('Welcome', MessageType.Success, Position.TopCenter, 3,true);
    this.alertify.message('Welcome', {
      messageType: MessageType.Notify,
      delay: 5,
      position: Position.TopLeft
    });
  }
  d() {
    this.alertify.dismiss();
  }
}
