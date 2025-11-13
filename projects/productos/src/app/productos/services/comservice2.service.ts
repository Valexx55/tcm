import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Comservice2Service {

  private channel = new BroadcastChannel('carrito_channel');

  sendMessage(message: any) {
    this.channel.postMessage(message);
  }

  onMessage(callback: (msg: any) => void) {
    this.channel.onmessage = (event) => callback(event.data);
  }
}
