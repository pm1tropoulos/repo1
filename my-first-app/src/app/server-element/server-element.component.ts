import { element } from 'protractor';
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges {
  @Input() element: { type: string, name: string, content: string };
  constructor() {
    console.log('Constructor called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('Changes Called !!')
    console.log(changes)
  }

  ngOnInit(): void {
    console.log('ngOnInit called');
  }

}
