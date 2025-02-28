import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Child1Component } from "./child1/child1.component";
import { Child2Component } from "./child2/child2.component";
import { MessageService } from './message.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Child1Component, Child2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  parentMessage: string = ''
  message: string[] = []
  
  constructor(private messageService: MessageService) {
    this.message=messageService.getMessage()
  }

  handelMessage(message: string) {
    this.parentMessage = message
    console.log(message);
    
  }
}
