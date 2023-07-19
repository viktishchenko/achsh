import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, tap, throwError } from 'rxjs';
import { IProducts } from '../models/products';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private productUrl = 'api/products/products.json';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<IProducts[]> {
    return this.http.get<IProducts[]>(this.productUrl).pipe(
      // tap((data) => console.log('Data>>', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getProduct(id: number): Observable<IProducts | undefined> {
    return this.getProducts().pipe(
      // tap((p) => console.log('p>>', p)),
      map((products) => {
        return products.find((p) => p.productId === id);
      })
    );
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(() => errorMessage);
  }
}
