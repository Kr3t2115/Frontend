import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Recepta } from '../recepta';

@Component({
  selector: 'app-add-recepta',
  templateUrl: './add-recepta.component.html',
  styleUrls: ['./add-recepta.component.css']
})
export class AddReceptaComponent  {

  baseURL ='http://127.0.0.1:3000/api/postRec'


  modele = new Recepta('','','')

  constructor(private http: HttpClient) {}
  
  url = 'http://localhost:3000/api/lekarze';
  all: any;
  url_pacjent = 'http://localhost:3000/api/pacjenci';
  all_pacjent: any;
  url_leki = 'http://localhost:3000/api/leki';
  all_leki: any;
  ngOnInit() {
      this.http.get<any[]>(this.url).subscribe(
      (res) => {
        this.all = res;
      })
      this.http.get<any[]>(this.url_pacjent).subscribe(
        (res) => {
          this.all_pacjent = res;
        })
      this.http.get<any[]>(this.url_leki).subscribe(
          (res) => {
            this.all_leki = res;
        })
  }

  daj() {
    return this.http.post(this.baseURL, this.modele).toPromise().then(data =>{
      console.log(data)
    })
    
  }
  
}