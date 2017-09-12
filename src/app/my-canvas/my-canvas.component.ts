import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {el} from "@angular/platform-browser/testing/src/browser_util";
declare const $: any;

@Component({
  selector: 'app-my-canvas',
  templateUrl: './my-canvas.component.html',
  styleUrls: ['./my-canvas.component.css']
})
export class MyCanvasComponent implements OnInit {
  @Input() canvasCtx;
  @ViewChild('myCanvas') canvasRef: ElementRef;
  drawStarted = false;
  firstPoint = {
    x: 0,
    y: 0
  };
  constructor() { }

  ngOnInit() {
    this.canvasCtx = CanvasRenderingContext2D = this.canvasRef.nativeElement.getContext('2d');
  }

  onClick($event) {
    if (!this.drawStarted) {
      this.firstPoint.x = $event.offsetX;
      this.firstPoint.y = $event.offsetY;
      this.clearCanvas();
      this.drawStarted = true;
    } else {
      this.drawStarted = false;
    }
  }
  mouseMove($event) {
    if (this.drawStarted) {
      this.clearCanvas();
      this.drawLineDDA({x: this.firstPoint.x, y: this.firstPoint.y}, {x: $event.offsetX, y: $event.offsetY});
    }
  }
  drawLineDDA(firstPoint, secondPoint) {
    const steps = Math.max(Math.abs(secondPoint.x - firstPoint.x), Math.abs(secondPoint.y - firstPoint.y));
    const differenceX = (secondPoint.x - firstPoint.x) / steps;
    const differenceY = (secondPoint.y - firstPoint.y) / steps;

    let x = firstPoint.x;
    let y = firstPoint.y;
    this.canvasCtx.fillRect(Math.round(x), Math.round(y), 1, 1);

    for (let i = 0; i <= steps; i++) {
      x += differenceX;
      y += differenceY;
      this.canvasCtx.fillRect(Math.round(x), Math.round(y), 1, 1);
    }
  }
  clearCanvas() {
    this.canvasCtx.clearRect(0, 0, this.canvasCtx.canvas.width, this.canvasCtx.canvas.height);
  }
  setScale(scale) {
    debugger;
    this.canvasCtx.scale(scale, scale);
  }
}
