import {Component, OnDestroy, OnInit} from '@angular/core';
import {BackgroundSelectorService} from './background-selector.service';
import {Subscription} from 'rxjs';
import {BackgroundModel} from './background.model';

@Component({
  selector: 'app-background-selector',
  templateUrl: './background-selector.component.html',
  styleUrls: ['./background-selector.component.css']
})
export class BackgroundSelectorComponent implements OnInit, OnDestroy {

  backgrounds: BackgroundModel[];
  current: BackgroundModel;
  bgSub: Subscription;

  constructor(private bgService: BackgroundSelectorService) { }

  ngOnInit(): void {
    this.backgrounds = this.bgService.backgrounds;
    console.log(this.bgService.backgrounds);
    this.bgSub = this.bgService.selected.subscribe(bg => {
      this.current = bg;
    });
  }

  ngOnDestroy(): void {
    this.bgSub.unsubscribe();
  }

  changeBackground(index: number): void {
    this.bgService.changeBackground(index);
  }

}
