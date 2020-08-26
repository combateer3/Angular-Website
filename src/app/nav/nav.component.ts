import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  backgroundColor = 'transparent';

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event']) onScroll(e: Event): void {
    // when scrolled down, should change nav background to solid color
    console.log(window.scrollY);
    if (window.scrollY === 0) {
      this.backgroundColor = 'transparent';
    } else {
      this.backgroundColor = '#3a345f';
    }
  }

}
