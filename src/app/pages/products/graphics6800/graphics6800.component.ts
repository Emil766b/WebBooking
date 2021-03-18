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
  {specName: 'Grafik engine', name: 'AMD Radeon RX 6800'},
  {specName: 'Kerne clock	', name: '1925 MHz'},
  {specName: 'Boost Clock	', name: '2155 MHz'},
  {specName: 'Strømprocessorer', name: '3840'},
  {specName: 'Maksimum opløsning	', name: '7680 x 4320'},
  {specName: 'Interfacer', name: 'HDMI, 3 x DisplayPort'},
  {specName: 'Hukommelse', name: '16 GB'},
  {specName: 'Påkrævet strømforsyning', name: '650 W'},
];

@Component({
  selector: 'app-graphics6800',
  templateUrl: './graphics6800.component.html',
  styleUrls: ['./graphics6800.component.css']
})
export class Graphics6800Component {

  public successMsg: string;
  public errorMsg: string;
  public productName: string;
  public customerName: string;
  public email: string;

  displayedColumns: string[] = ['specName', 'name'];
  dataSource = SPEC_DATA;


    
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
