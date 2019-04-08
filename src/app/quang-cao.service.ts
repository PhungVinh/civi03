import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';
// import { Title } from '../models/title';
import { QuangCao } from '../models/quangcao';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
// import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class QuangCaoService {
  private quangcaosURL = 'http://localhost:3000/Quangcao';
  getQuangcaos(): Observable<QuangCao[]> {
    // this.messageService.add(`${new Date().toLocaleString()}. Get movie list`);
    // return of(fakeMovies);
    return this.http.get<QuangCao[]>(this.quangcaosURL).pipe(
      tap(receivedQuangcaos => console.log(`receivedQuangcaos = ${JSON.stringify(receivedQuangcaos)}`)),
      catchError(error => of([]))
    );
  }
  constructor(
    private http: HttpClient
  ) { }
}
