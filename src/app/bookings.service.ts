import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bookings } from './bookings';
@Injectable({
  providedIn: 'root'
})
export class BookingsService {

  private BASE_URL = environment.API_URL;

  constructor(private http: HttpClient) { }

  getBookings(): Observable<Bookings[]> {
    return this.http.get<Bookings[]>(`${this.BASE_URL}/bookings`)
  }

  createBookings(productName: string, customerName: string, email: string): Observable<Bookings> {
    return this.http.post<Bookings>(`${this.BASE_URL}/bookings`,
    { productName, customerName, email });
  }

  cancelBooking(id: string): Observable<any> {
    return this.http.delete(`${this.BASE_URL}/bookings/${id}`);
  }
}
