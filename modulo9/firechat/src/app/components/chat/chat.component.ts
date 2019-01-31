import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../providers/chat.service';

@Component({
	selector: 'app-chat',
	templateUrl: './chat.component.html',
	styles: []
})
export class ChatComponent implements OnInit {
	mensaje: string = '';
  
  constructor(public _chatService:ChatService) {

    _chatService.getMensajes().subscribe()
  }

	ngOnInit() {}

	enviarMensaje() {
    console.log(this.mensaje);
    if (this.mensaje.length==0) {
      return
    }
    this._chatService.agregarMensaje(this.mensaje)
    .then(()=>{ this.mensaje="" ;console.log('MEnsaje enviado')})
    .catch((error)=>{console.error('Error de envio',error);
    })
	}
}
