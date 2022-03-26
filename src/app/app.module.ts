import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import  {MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LekarzeComponent } from './lekarze/lekarze.component';
import { LekiComponent } from './leki/leki.component';
import { PacjenciComponent } from './pacjenci/pacjenci.component';
import { ReceptyComponent } from './recepty/recepty.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    LekarzeComponent,
    LekiComponent,
    PacjenciComponent,
    ReceptyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
