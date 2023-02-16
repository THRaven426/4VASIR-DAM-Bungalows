import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { Reserva } from '../shared/reserva';


@Injectable({
  providedIn: 'root'
})


export class ReservaService {
  private reservasUrl = 'url symfony';
  constructor(private http: HttpClient) { }

  getReservas(): Observable<Reserva[]>  {
    return this.http.get<Reserva[]>(this.reservasUrl).pipe(
      tap((data) => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  public getMaxReservaId(): Observable<number> {
    return this.http.get<Reserva[]>(this.reservasUrl).pipe(
      // Get max value from an array
      map((data) =>
        Math.max.apply(
          Math,
          data.map(function (o) {
            return o.id;
          })
        )
      ),
      catchError(this.handleError)
    );
  }
  
  getReservaById(id: number): Observable<Reserva> {
    const url = `${this.reservasUrl}/${id}`;
    return this.http.get<Reserva>(url).pipe(
      tap((data) => console.log('getReserva: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }


  createReserva(reserva: Reserva): Observable<Reserva> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    reserva.id = 0;
    return this.http
      .post<Reserva>(this.reservasUrl, reserva, { headers: headers })
      .pipe(
        tap((data) => console.log('createBungalow: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  deleteReserva(id: number): Observable<{}> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.reservasUrl}/${id}`;
    return this.http.delete<Reserva>(url, { headers: headers }).pipe(
      tap((data) => console.log('deleteReserva: ' + id)),
      catchError(this.handleError)
    );
  }

  updateReserva(reserva: Reserva): Observable<Reserva> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.reservasUrl}/${reserva.id}`;
    return this.http.put<Reserva>(url, reserva, { headers: headers }).pipe(
      tap(() => console.log('updatebungalow: ' + reserva.id)),
      // Return the bungalow on an update
      map(() => reserva),
      catchError(this.handleError)
    );
  }


  private handleError(err: any) {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
