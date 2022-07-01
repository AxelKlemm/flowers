import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlowerCardComponent } from './flower-card/flower-card.component';
import { FlowerListComponent } from './flower-list/flower-list.component';
import { FlowerFilterComponent } from './flower-filter/flower-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    FlowerCardComponent,
    FlowerListComponent,
    FlowerFilterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
