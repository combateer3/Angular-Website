import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {BackgroundModel, BackgroundType} from './background.model';

@Injectable({providedIn: 'root'})
export class BackgroundSelectorService {

  // static images are their own thumbnail, but videos have to have a static image since the html
  // uses an img tag
  backgrounds: BackgroundModel[] = [
    {
      filename: 'main-bg.png',
      thumbnailFilename: 'main-bg.png',
      filetype: BackgroundType.IMAGE
    },
    {
      filename: 'lightbulbs-bg.jpg',
      thumbnailFilename: 'lightbulbs-bg.jpg',
      filetype: BackgroundType.IMAGE
    },
    {
      filename: 'waves-bg.mp4',
      thumbnailFilename: 'waves-thumbnail.png',
      filetype: BackgroundType.VIDEO
    }
    ];

  // default element is first bg
  selected = new BehaviorSubject<BackgroundModel>(this.backgrounds[2]);

  changeBackground(index: number): void {
    this.selected.next(this.backgrounds[index]);
  }

}
