import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-add-pacjent',
  templateUrl: './add-pacjent.component.html',
  styleUrls: ['./add-pacjent.component.css']
})
export class AddPacjentComponent  {

  baseURL ='http://127.0.0.1:3000/api/post'


  modele = new User('','','')

  constructor(private http: HttpClient) {}
  
  daj() {
    return this.http.post(this.baseURL, this.modele).toPromise().then(data =>{
      console.log(data)
    })
    
  }
}
