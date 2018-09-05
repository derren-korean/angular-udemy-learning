import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  DEFAULT_SHOW_TIEM = 'recipes';
  @Output('onSelected') item = new EventEmitter<String>();

  onSelected(selected: string) {
    this.item.emit(selected);
  }

  ngOnInit() {
    this.onSelected(this.DEFAULT_SHOW_TIEM);
  }
}
