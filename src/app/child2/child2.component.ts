import { Component, Input, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-child2',
  imports: [],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css'
})
export class Child2Component extends BaseComponent implements OnInit{
  @Input() customMessage: string = ''; // Input Property

  constructor(mgsService:MessageService) {
    super(mgsService)
    this.showMessage('hello from child 2')
  }
  
  ngOnInit(): void {
    if (this.customMessage) {
      this.updateMessage(this.customMessage); // استفاده از customMessage
    }
  }
}
