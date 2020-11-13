import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.scss'],
})
export class HeaderBarComponent implements OnInit {
  @Output() sideMenu = new EventEmitter();
  constructor(private router: Router) { }

  ngOnInit() {}
  
  emit(eventName) {
    this[eventName].emit();
  }

  goHome() {
    this.router.navigateByUrl('/home');
  }

  goPersonalInfo() {
    this.router.navigateByUrl('');
  }
}
