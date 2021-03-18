import { Component, OnInit } from '@angular/core';
import { Bookings } from '../bookings';
import { BookingsService } from '../bookings.service';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {

  public loading = true;
  public errorMsg: string;
  public successMsg: string;
  public bookings: Bookings[];
  public columns: string[] = ['productName', 'customerName', 'email', 'cancel'];

  constructor(private bookingService: BookingsService) { }

  ngOnInit(): void {
    this.bookingService.getBookings()
      .subscribe((bookings: Bookings[]) => {
        this.bookings = bookings;
        this.loading = false;
      },
      (error: ErrorEvent) => {
        this.errorMsg = error.message;
        this.loading = false;
      });
  }

  cancelBookings(id: string) {
    this.bookingService.cancelBooking(id)
      .pipe(
        mergeMap(() => this.bookingService.getBookings())
      )
      .subscribe((bookings: Bookings[]) => {
        this.bookings = bookings;
        this.successMsg = 'Successfully cancelled booking'
      },
      (error: ErrorEvent) => {
        this.errorMsg = error.error.message;
      });
  }

}
