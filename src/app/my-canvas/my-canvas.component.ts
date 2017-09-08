import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {el} from "@angular/platform-browser/testing/src/browser_util";
declare var $: any;

@Component({
  selector: 'app-my-canvas',
  templateUrl: './my-canvas.component.html',
  styleUrls: ['./my-canvas.component.css']
})
export class MyCanvasComponent implements OnInit {
  @ViewChild('myCanvas') canvasRef: ElementRef;

  constructor() { }

  ngOnInit() {
    const ctx: CanvasRenderingContext2D = this.canvasRef.nativeElement.getContext('2d');
    const $canvas = $('#myCanvas');

    ctx.canvas.width = $canvas.width();
    ctx.canvas.height = $canvas.height();
    const firstPoint = {
      x: 100,
      y: 100
    };
    const secondPoint = {
      x: 200,
      y: 200
    };
    const differenceX = secondPoint.x - firstPoint.x;
    const differenceY = secondPoint.y - firstPoint.y;
    let steps;

    if (Math.abs(differenceX) > Math.abs(differenceY)) {
      steps = Math.abs(differenceX);
    } else {
      steps = Math.abs(differenceY);
    }

    const incrementX = differenceX / steps;
    const incrementY = differenceY / steps;

    for (let i = 0; i < steps; i++) {
      let x = x + Xincrement;
      y = y + Yincrement;
      putpixel(Round(x), Round(y));
    }
  }
}
