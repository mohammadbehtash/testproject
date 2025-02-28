import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private message: string[] = []
  constructor() { }
  
  addMessage(msg: string): void{
    this.message.push(msg)
    console.log('Message added:', msg);
  }

  getMessage():string[] {
    return this.message
  }
}
