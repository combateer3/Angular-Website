import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.css']
})
export class ProjectItemComponent implements OnInit {

  @Input() title: string;
  @Input() imageName: string;
  @Input() description: string;
  @Input() sourceCodeLink: string;

  constructor() { }

  ngOnInit(): void {
  }

}
