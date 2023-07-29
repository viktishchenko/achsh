import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import {
  throwError,
  Observable,
  map,
  of,
  concatMap,
  tap,
  mergeMap,
  switchMap,
} from 'rxjs';
import { Supplier } from './supplier';

@Injectable({
  providedIn: 'root',
})
export class SupplierService {
  suppliersUrl = 'api/suppliers';

  /* ---HIGH-ORDER-MAPPING---START--- */

  suppliersWithMap$ = of(1, 5, 8).pipe(
    tap((id) => console.log('map>>', id)),
    map((id) => this.http.get<Supplier>(`${this.suppliersUrl}/${id}`))
  );
  suppliersWithConcatMap$ = of(2, 4, 9).pipe(
    tap((id) => console.log('concatMap>>', id)),
    concatMap((id) => this.http.get<Supplier>(`${this.suppliersUrl}/${id}`))
  );
  suppliersWithMergeMap$ = of(3, 6, 10).pipe(
    tap((id) => console.log('mergeMap>>', id)),
    mergeMap((id) => this.http.get<Supplier>(`${this.suppliersUrl}/${id}`))
  );
  suppliersWithSwitchMap$ = of(1, 7, 8).pipe(
    tap((id) => console.log('switchMap>>', id)),
    switchMap((id) => this.http.get<Supplier>(`${this.suppliersUrl}/${id}`))
  );

  constructor(private http: HttpClient) {
    this.suppliersWithMap$.subscribe((o) =>
      o.subscribe((item) => console.log('map result>>', item))
    );
    this.suppliersWithConcatMap$.subscribe((item) =>
      console.log('concatMap result>>', item)
    );
    this.suppliersWithMergeMap$.subscribe((item) =>
      console.log('mergeMap result>>', item)
    );
    this.suppliersWithSwitchMap$.subscribe((item) =>
      console.log('switchMap result>>', item)
    );
  }

  /* ---HIGH-ORDER-MAPPING---END--- */

  private handleError(err: HttpErrorResponse): Observable<never> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.message}`;
    }
    console.error(err);
    return throwError(() => errorMessage);
  }
}
