import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface recepty {
  imie_lekarza: any;
  naz_lekarza: any;
  imie_pacjenta: any;
  nazw_pacjenta: any;
  pesel: any;
  nazwa_leku: any;
  data: any;
}


@Component({
  selector: 'app-recepty',
  templateUrl: './recepty.component.html',
  styleUrls: ['./recepty.component.css']
})
export class ReceptyComponent implements OnInit {

  constructor(private http: HttpClient) { }
  url = 'http://localhost:3000/api/recepta';
  szuakny_text: string = '';
  all: recepty[] = [];
  filter: any;
  ngOnInit() {
    this.http.get<recepty[]>(this.url).subscribe(
      (res) => {
        this.all = res;
        this.filter = this.all;
      })
}
szukaj() {
  this.filter = this.all.filter(
    (all) =>
    all.pesel.toLowerCase().includes(this.szuakny_text.toLowerCase()) ||
    all.imie_pacjenta.toLowerCase().includes(this.szuakny_text.toLowerCase()) ||
    all.nazw_pacjenta.toLowerCase().includes(this.szuakny_text.toLowerCase()) 

  );
}
}
