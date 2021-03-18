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
  {specName: 'Bus Type', name: 'PCI Express 4.0'},
  {specName: 'Grafik engine', name: '	NVIDIA GeForce RTX 3070'},
  {specName: 'Kerne clock	', name: '1500 MHz'},
  {specName: 'Boost Clock	', name: '1935 MHz'},
  {specName: 'CUDA kerner', name: '5888'},
  {specName: 'Maksimum opløsning	', name: '7680 x 4320'},
  {specName: 'Interfacer', name: '2 x HDMI 3 x DisplayPort'},
  {specName: 'Hukommelse', name: '8 GB'},
  {specName: 'Påkrævet strømforsyning', name: '750 W'},
];

@Component({
  selector: 'app-graphics3070',
  templateUrl: './graphics3070.component.html',
  styleUrls: ['./graphics3070.component.css']
})
export class Graphics3070Component {

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