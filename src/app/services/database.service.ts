import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DatabaseInfoService {
  constructor(private http : HttpClient) {

  }

  public user: string = "";
  public host: string = "";
  public password: string = "";
  public database: string = "";
  public port: number = 0;
  
  private endpoint = 'http://127.0.0.1:5000/';

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }

  private extractData(res: Response): any {
    const body = res;
    return body || { };
  }

  authorize(): Observable<any> {
    return this.http.get(this.endpoint + '/login', {
      params: {
        user: this.user,
        host: this.host,
        password: this.password,
        database: this.database,
        port: this.port
      },
      observe: 'response',
      responseType: "text"
    })
    .pipe(
      tap(_ => console.log('fetched authorize')),
      catchError(this.handleError)
    );
  }

  getTables(): Observable<any> {
    return this.http.get(this.endpoint + '/get_list')
    .pipe(tap(_ => console.log('fetched table names')),
    catchError(this.handleError)
    );
  }
}
