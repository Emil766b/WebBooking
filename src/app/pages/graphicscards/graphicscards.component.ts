import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-graphicscards',
  templateUrl: './graphicscards.component.html',
  styleUrls: ['./graphicscards.component.css']
})
export class GraphicscardsComponent {

  typesOfShoes: string[] = ['AMD', 'Nvidia', '3070', '3080', '6800', '6800xt'];

  graphics1:boolean = true;
  graphics2:boolean = true;
  graphics3:boolean = true;
  graphics4:boolean = true;
  graphics5:boolean = true;
  graphics6:boolean = true;

  graphics1show() {
    this.graphics1 = true;
    this.graphics2 = false;
    this.graphics3 = false;
    this.graphics4 = false;
    this.graphics5 = false;
    this.graphics6 = false;
  }


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

}