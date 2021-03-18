import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookingComponent } from './booking/booking.component';
import { BookingsComponent } from './bookings/bookings.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProcessorsComponent } from './pages/processors/processors.component';
import { GraphicscardsComponent } from './pages/graphicscards/graphicscards.component';
import { MonitorsComponent } from './pages/monitors/monitors.component';

import { Graphics3070Component } from './pages/products/graphics3070/graphics3070.component';
import { Graphics3080Component } from './pages/products/graphics3080/graphics3080.component';
import { Graphics6800xtComponent } from './pages/products/graphics6800xt/graphics6800xt.component';
import { Graphics6800Component } from './pages/products/graphics6800/graphics6800.component';
import { Monitorc27Component } from './pages/products/monitorc27/monitorc27.component';
import { MonitorrogComponent } from './pages/products/monitorrog/monitorrog.component';
import { MonitortufComponent } from './pages/products/monitortuf/monitortuf.component';
import { Processor5600xComponent } from './pages/products/processor5600x/processor5600x.component';
import { Processor5800xComponent } from './pages/products/processor5800x/processor5800x.component';
import { Processor5900xComponent } from './pages/products/processor5900x/processor5900x.component';
import { Processor5950xComponent } from './pages/products/processor5950x/processor5950x.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'booking', component: BookingComponent},
  {path: 'bookings', component: BookingsComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'pages/processors', component: ProcessorsComponent},
  {path: 'pages/graphicscards', component: GraphicscardsComponent},
  {path: 'pages/monitors', component: MonitorsComponent},

  {path: 'pages/products/graphics3070', component: Graphics3070Component},
  {path: 'pages/products/graphics3080', component: Graphics3080Component},
  {path: 'pages/products/graphics6800xt', component: Graphics6800xtComponent},
  {path: 'pages/products/graphics6800', component: Graphics6800Component},
  {path: 'pages/products/monitorc27', component: Monitorc27Component},
  {path: 'pages/products/monitorrog', component: MonitorrogComponent},
  {path: 'pages/products/monitortuf', component: MonitortufComponent},
  {path: 'pages/products/processor5600x', component: Processor5600xComponent},
  {path: 'pages/products/processor5800x', component: Processor5800xComponent},
  {path: 'pages/products/processor5900x', component: Processor5900xComponent},
  {path: 'pages/products/processor5950x', component: Processor5950xComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
