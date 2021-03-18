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
  {specName: 'Type / Model', name: 'AMD Ryzen 5 5800X'},
  {specName: 'Antal kerner', name: '8 kerner'},
  {specName: 'Antal tråde', name: '16 tråde'},
  {specName: 'Cache	', name: '32 MB'},
  {specName: 'Antal processorer	', name: '1'},
  {specName: 'Clock-frekvens', name: '3.8 GHz'},
  {specName: 'Max Turbo Speed', name: '4.7 GHz'},
  {specName: 'Kompatibel Processor Tilslutning	', name: 'Socket AM4'},
  {specName: 'Fremstillingsproces', name: '7 nm'},
  {specName: 'Termisk designeffekt', name: '105 W'},
  {specName: 'PCI Express-revision', name: '4.0'},
];

@Component({
  selector: 'app-processor5800x',
  templateUrl: './processor5800x.component.html',
  styleUrls: ['./processor5800x.component.css']
})
export class Processor5800xComponent {

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
