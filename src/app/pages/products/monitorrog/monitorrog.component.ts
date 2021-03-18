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
  {specName: 'Skærmtype', name: 'LED-baggrundsbelyst LCD-skærm / TFT aktiv matriks'},
  {specName: 'Adaptive-Sync teknologi', name: 'NVIDIA G-SYNC'},
  {specName: 'Diagonal størrelse', name: '24.5"'},
  {specName: 'Paneltype', name: 'IPS'},
  {specName: 'Formatforhold', name: '16:9'},
  {specName: 'Standard opløsning', name: 'Full HD (1080p) 1920 x 1080 ved 360 Hz'},
  {specName: 'Lysstyrke', name: '400 cd/m²'},
  {specName: 'Responstid', name: '1 ms (MPRT)'},
  {specName: 'Vægt', name: '7.1 kg'},
  {specName: 'Forbindelse', name: 'HDMIDisplayPort Hovedtelefoner USB 3.0 upstream 2 x USB 3.0 downstream'},
];

@Component({
  selector: 'app-monitorrog',
  templateUrl: './monitorrog.component.html',
  styleUrls: ['./monitorrog.component.css']
})
export class MonitorrogComponent {

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
