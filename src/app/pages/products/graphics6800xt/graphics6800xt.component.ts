import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { BookingsService } from 'src/app/bookings.service'
import { Bookings } from 'src/app/bookings';
import { ShowOnDirtyErrorStateMatcher } from '@angular/material/core';

export interface specElement {
  specName: string;
  name: string;
}

const SPEC_DATA: specElement[] = [
  {specName: 'Enhedstype', name: 'Grafikkort'},
  {specName: 'Bus Type', name: 'PCI Express 4.0 x16'},
  {specName: 'Grafik engine', name: 'AMD Radeon RX 6800 XT'},
  {specName: 'Kerne clock	', name: '1900 MHz'},
  {specName: 'Boost Clock	', name: '2340 MHz'},
  {specName: 'Strømprocessorer', name: '4608'},
  {specName: 'Procesteknologi', name: '7 nm'},
  {specName: 'Maksimum opløsning	', name: '7680 x 4320'},
  {specName: 'Interfacer', name: 'HDMI, 3 x DisplayPort'},
  {specName: 'Hukommelse', name: '16 GB'},
  {specName: 'Påkrævet strømforsyning', name: '750 W'},
];

@Component({
  selector: 'app-graphics6800xt',
  templateUrl: './graphics6800xt.component.html',
  styleUrls: ['./graphics6800xt.component.css']
})
export class Graphics6800xtComponent {

  public successMsg: string;
  public errorMsg: string;
  public productName: string;
  public customerName: string;
  public email: string;

  displayedColumns: string[] = ['specName', 'name'];
  dataSource = SPEC_DATA;

  selected = 'option2';


    
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

  constructor(private breakpointObserver: BreakpointObserver, private bookingService: BookingsService) {}

  ngOnInit(): void {
  }

  createBookings() {
    this.successMsg = '';
    this.errorMsg = '';
    this.bookingService.createBookings(this.productName, this.customerName, this.email)
      .subscribe((createdBooking: Bookings) => {
        this.productName = '';
        this.customerName = '';
        this.email = '';
        const productName = new Date(createdBooking.productName).toString
        this.successMsg = `${productName} successfully orderd`;
      },
      (error: ErrorEvent) => {
        this.errorMsg = error.error.message;
      });
  }

}

