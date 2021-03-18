import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { BookingComponent } from './booking/booking.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { BookingsComponent } from './bookings/bookings.component';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ProductsComponent } from './products/products.component';
import { Amd6800xtComponent } from './pages/amd6800xt/amd6800xt.component';
import { Amd5900xComponent } from './pages/amd5900x/amd5900x.component';
import { ProcessorsComponent } from './pages/processors/processors.component';
import { GraphicscardsComponent } from './pages/graphicscards/graphicscards.component';
import { MonitorsComponent } from './pages/monitors/monitors.component';
import { Processor5950xComponent } from './pages/products/processor5950x/processor5950x.component';
import { Processor5900xComponent } from './pages/products/processor5900x/processor5900x.component';
import { Processor5800xComponent } from './pages/products/processor5800x/processor5800x.component';
import { Processor5600xComponent } from './pages/products/processor5600x/processor5600x.component';
import { Graphics6800xtComponent } from './pages/products/graphics6800xt/graphics6800xt.component';
import { Graphics6800Component } from './pages/products/graphics6800/graphics6800.component';
import { Graphics3070Component } from './pages/products/graphics3070/graphics3070.component';
import { Graphics3080Component } from './pages/products/graphics3080/graphics3080.component';
import { MonitortufComponent } from './pages/products/monitortuf/monitortuf.component';
import { MonitorrogComponent } from './pages/products/monitorrog/monitorrog.component';
import { Monitorc27Component } from './pages/products/monitorc27/monitorc27.component';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    MainFooterComponent,
    BookingComponent,
    HomeComponent,
    BookingsComponent,
    ProductsComponent,
    Amd6800xtComponent,
    Amd5900xComponent,
    ProcessorsComponent,
    GraphicscardsComponent,
    MonitorsComponent,
    Processor5950xComponent,
    Processor5900xComponent,
    Processor5800xComponent,
    Processor5600xComponent,
    Graphics6800xtComponent,
    Graphics6800Component,
    Graphics3070Component,
    Graphics3080Component,
    MonitortufComponent,
    MonitorrogComponent,
    Monitorc27Component,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
