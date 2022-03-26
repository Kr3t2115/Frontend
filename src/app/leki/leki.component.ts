import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leki',
  templateUrl: './leki.component.html',
  styleUrls: ['./leki.component.css']
})
export class LekiComponent implements OnInit {

  constructor(private http: HttpClient) { }
  url = 'http://localhost:3000/api/leki';
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
    (all: { nazwa_leku: string;}) =>
    all.nazwa_leku.toLowerCase().includes(this.szuakny_text.toLowerCase()) 
  );
}

}
