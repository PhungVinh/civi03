import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { SuKien } from '../models/sukien';

import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class SuKienService {
  private sukiensURL = 'http://localhost:3000/Sukien';
  getSukiens(): Observable<SuKien[]> {
    return this.http.get<SuKien[]>(this.sukiensURL).pipe(
      tap(receivedSukiens => console.log(`receivedSukiens = ${JSON.stringify(receivedSukiens)}`)),
      catchError(error => of([]))
    );
  }

  getSuKienFromId(id: number): Observable<SuKien> {
    const url = `${this.sukiensURL}/${id}`;
    return this.http.get<SuKien>(url).pipe(
      tap(selectedSuKien => console.log(`selected sukien = ${JSON.stringify(selectedSuKien)}`)),
      catchError(error => of(new SuKien()))
    );
  }

  /** PUT: update the SuKien on the server */
  updateSuKien(sukien: SuKien): Observable<any> {
    return this.http.put(`${this.sukiensURL}/${sukien.id}`, sukien, httpOptions).pipe(
      tap(updatedSuKien => console.log(`updated sukien = ${JSON.stringify(updatedSuKien)}`)),
      catchError(error => of(new SuKien()))
    );
  }

  // Posst : add a new sukien on the server
  addSuKien(newSuKien: SuKien): Observable<SuKien> {
    return this.http.post<SuKien>(this.sukiensURL, newSuKien, httpOptions).pipe(
      tap((sukien: SuKien) => console.log(`inserted sukien = ${JSON.stringify(sukien)}`)),
      catchError(error => of(new SuKien()))
    );
  }

  constructor(
    private http: HttpClient,
    public messageService: MessageService
  ) { }
}
