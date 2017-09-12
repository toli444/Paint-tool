import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MyCanvasComponent} from "../my-canvas/my-canvas.component";

@Component({
  selector: 'app-my-redactor',
  templateUrl: './my-redactor.component.html',
  styleUrls: ['./my-redactor.component.css']
})
export class MyRedactorComponent implements OnInit {
  @ViewChild('appMyCanvas') canvasRef: MyCanvasComponent;
  currentScale = 1;
  minScale = 1;
  maxScale = 4;
  constructor() { }

  ngOnInit() {
  }
  increaseScale() {
    if (this.currentScale < this.maxScale) {
      this.canvasRef.setScale(this.currentScale++);
    }
  }
  decreaseScale() {
    if (this.currentScale > this.minScale) {
      this.canvasRef.setScale(this.currentScale--);
    }
  }
}
