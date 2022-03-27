import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

export class Person {
  imie:string | undefined
  nazwisko:string | undefined
  name:string | undefined
}
 


@Component({
  selector: 'app-add-recepta',
  templateUrl: './add-recepta.component.html',
  styleUrls: ['./add-recepta.component.css']
})
export class AddReceptaComponent implements OnInit {

  selected = 'option2';

  baseURL ='http://127.0.0.1:3000/api/post'

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
  
  
  }

  getPeople(): Observable<Person[]> {
    console.log('getPeople '+this.baseURL )
    return this.http.get<Person[]>(this.baseURL + 'people')
  }
  
}