import { Component } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-base',
  imports: [],
  templateUrl: './base.component.html',
  styleUrl: './base.component.css'
})
export class BaseComponent {
  message: string = ''
  constructor(protected msgService:MessageService) { }
 
  showMessage(msg: string) {
    this.message = msg
    this.msgService.addMessage(msg)
    console.log(this.message);
  }
  updateMessage(newMsg:string) {
    this.message = newMsg
    this.msgService.addMessage(newMsg)
    console.log(newMsg);
    
  }
}
