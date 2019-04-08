import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Title } from '../models/title';

//MessageService
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  private titlesURL = 'http://localhost:3000/title';
  getTitles(): Observable<Title[]> {
    // this.messageService.add(`${new Date().toLocaleString()}. Get movie list`);
    // return of(fakeMovies);
    return this.http.get<Title[]>(this.titlesURL).pipe(
      tap(receivedTitles => console.log(`receivedTitles = ${JSON.stringify(receivedTitles)}`)),
      catchError(error => of([]))
    );
  }

  constructor(
    private http: HttpClient
    // public messageService: MessageService
  ) { }
}
