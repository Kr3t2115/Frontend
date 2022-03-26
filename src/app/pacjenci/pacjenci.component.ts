import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pacjenci',
  templateUrl: './pacjenci.component.html',
  styleUrls: ['./pacjenci.component.css']
})
export class PacjenciComponent implements OnInit {

  constructor(private http: HttpClient) { }
  url = 'http://localhost:3000/api/pacjenci';
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
    (all: { imie_pacjenta: string;}) =>
    all.imie_pacjenta.toLowerCase().includes(this.szuakny_text.toLowerCase()) 
  );
}
}
