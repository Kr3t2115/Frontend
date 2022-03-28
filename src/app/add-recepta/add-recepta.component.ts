import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user';



@Component({
  selector: 'app-add-recepta',
  templateUrl: './add-recepta.component.html',
  styleUrls: ['./add-recepta.component.css']
})
export class AddReceptaComponent  {

  baseURL ='http://127.0.0.1:3000/api/post'



  krecie_imie = "szymogdfagn"
  krecie_nazwisko = 'baranowicz'
  kreci_wiek = 22

  cos = {
   imie: this.krecie_imie,
   nazwisko: this.krecie_nazwisko,
   wiek: this.kreci_wiek
  }

  modele = new User('imie','nzads','')

  constructor(private http: HttpClient) {}
  
  daj() {
    return this.http.post(this.baseURL, this.modele).toPromise().then(data =>{
      console.log(data)
    })
    
  }
  
}