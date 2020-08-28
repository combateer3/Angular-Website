import {Component, OnDestroy, OnInit} from '@angular/core';
import {BackgroundSelectorService} from './background-selector/background-selector.service';
import {Subscription} from 'rxjs';
import {BackgroundModel, BackgroundType} from './background-selector/background.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'website';

  backgroundPath: string;
  currentBg: BackgroundModel;
  isVideoBg = false;

  bgSub: Subscription;

  constructor(private bgService: BackgroundSelectorService) {}

  ngOnInit(): void {
    this.bgSub = this.bgService.selected.subscribe(bg => {
      this.backgroundPath = 'assets/backgrounds/' + bg.filename;
      this.currentBg = bg;
      this.isVideoBg = bg.filetype === BackgroundType.VIDEO;
    });
  }

  ngOnDestroy(): void {
    this.bgSub.unsubscribe();
  }
}
