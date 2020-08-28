import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-i-am-a',
  animations: [
    trigger('displayName', [
      state('in', style({opacity: 1})),
      state('out', style({opacity: 0, display: 'none'})),
      transition('in => out', [
        animate('0.4s')
      ]),
      transition('out => in', [
        animate('0.4s')
      ])
    ])
  ],
  templateUrl: './i-am-a.component.html',
  styleUrls: ['./i-am-a.component.css']
})
export class IAmAComponent implements OnInit {

  current = 0;

  items = [
    {
      value: 'Michigan Tech student',
      animationState: 'in'
    },
    {
      value: 'web developer',
      animationState: 'out'
    },
    {
      value: 'Android developer',
      animationState: 'out'
    }
    ];

  constructor() { }

  ngOnInit(): void {
    setInterval((function(): void {
      this.items[this.current].animationState = 'out';
      this.current++;
      if (this.current >= this.items.length) {
        this.current = 0;
      }
      this.items[this.current].animationState = 'in';
    }).bind(this), 3000);
  }

}
