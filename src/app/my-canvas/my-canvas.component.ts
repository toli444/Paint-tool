import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {el} from "@angular/platform-browser/testing/src/browser_util";
declare const $: any;

@Component({
  selector: 'app-my-canvas',
  templateUrl: './my-canvas.component.html',
  styleUrls: ['./my-canvas.component.css']
})
export class MyCanvasComponent implements OnInit {
  @ViewChild('myCanvas') canvasRef: ElementRef;

  ctx;
  firstClick = true;
  firstPoint = {
    x: 0,
    y: 0
  };
  constructor() { }

  ngOnInit() {
    this.ctx = CanvasRenderingContext2D = this.canvasRef.nativeElement.getContext('2d');
    // const $canvas = $('#myCanvas');
    // this.ctx.canvas.height = $canvas.width();
    // this.ctx.canvas.width = $canvas.height();
    const firstPoint = {
      x: 100,
      y: 100
    };
    const secondPoint = {
      x: 200,
      y: 200
    };
    this.drawLineDDA({x: 0, y: 0}, {x: 200, y: 200});
  }

  onClick($event) {
    if (this.firstClick) {
      this.firstPoint.x = $event.offsetX;
      this.firstPoint.y = $event.offsetY;
      this.ctx.clearRect(0, 0, this.ctx.width, this.ctx.height);
      this.firstClick = false;
    } else {
      this.drawLineDDA({x: this.firstPoint.x, y: this.firstPoint.y}, {x: $event.offsetX, y: $event.offsetY});
      this.firstClick = true;
    }
  }
  drawLineDDA(firstPoint, secondPoint) {
    const steps = Math.max(Math.abs(secondPoint.x - firstPoint.x), Math.abs(secondPoint.y - firstPoint.y));
    const differenceX = (secondPoint.x - firstPoint.x) / steps;
    const differenceY = (secondPoint.y - firstPoint.y) / steps;

    let x = firstPoint.x;
    let y = firstPoint.y;
    this.ctx.fillRect(Math.round(x), Math.round(y), 1, 1);

    for (let i = 0; i <= steps; i++) {
      x += differenceX;
      y += differenceY;
      this.ctx.fillRect(Math.round(x), Math.round(y), 1, 1);
    }
  }
}
