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
import { AddReceptaComponent } from './add-recepta/add-recepta.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { AddPacjentComponent } from './add-pacjent/add-pacjent.component';
import {MatButtonModule} from '@angular/material/button';






@NgModule({
  declarations: [
    AppComponent,
    LekarzeComponent,
    LekiComponent,
    PacjenciComponent,
    ReceptyComponent,
    AddReceptaComponent,
    AddPacjentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
