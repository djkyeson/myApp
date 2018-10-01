import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  nav_position = 'start';

  // This is used in the expansion panel example!
  panelOpenState = false;

  onTogglePosition(position: string) {
    this.nav_position = position === 'start' ? 'end' : 'start';

  }

  ngOnInit() {
  }

}
