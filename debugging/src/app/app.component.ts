import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  servers = [];

  onAddServer() {
    this.servers.push('Another Server - '+this.servers.length);
  }

  onRemoveServer(id: number) {
    this.servers.splice(id, 1);
  }
}
