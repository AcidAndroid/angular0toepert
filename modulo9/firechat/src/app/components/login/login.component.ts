import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../providers/chat.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _chatService:ChatService) { }

  ngOnInit() {
  }

  ingresar(tipo:string){
    console.log(tipo)
    this._chatService.login(tipo)    
  }

 

}
