import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-child1',
  imports: [],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css'
})
export class Child1Component extends BaseComponent implements OnInit{
  @Input() customMessage: string = ''
  @Output()messageSend=new EventEmitter<string>()
  constructor( msgService:MessageService) {
    super(msgService)
    this.showMessage('hello from child 1')
  }
  
  ngOnInit(): void {
    setTimeout(() => {
      this.updateMessage('updated message from child 1')
    }, 3000)
    if (this.customMessage) {
      this.updateMessage(this.customMessage); // استفاده از customMessage
      this.messageSend.emit(this.customMessage)
    }
  }
}
