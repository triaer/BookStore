import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.scss'],
})
export class HeaderBarComponent implements OnInit {
  @Output() sideMenu = new EventEmitter();
  constructor() { }

  ngOnInit() {}
  
  emit(eventName) {
    this[eventName].emit();
  }
}
