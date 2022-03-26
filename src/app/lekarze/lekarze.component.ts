import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-lekarze',
  templateUrl: './lekarze.component.html',
  styleUrls: ['./lekarze.component.css']
})

export class LekarzeComponent implements OnInit {

  constructor(private http: HttpClient) { }
  url = 'http://localhost:3000/api/lekarze';
  szuakny_text: string = '';
  all: any;
  filter: any;
  ngOnInit() {
    this.http.get<any[]>(this.url).subscribe(
      (res) => {
        this.all = res;
        this.filter = this.all;
      })
}
szukaj() {
  this.filter = this.all.filter(
    (all: { imie_lekarza: string;}) =>
    all.imie_lekarza.toLowerCase().includes(this.szuakny_text.toLowerCase()) 
  );
}
}