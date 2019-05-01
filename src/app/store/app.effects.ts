import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { switchMap, map, catchError, finalize } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";

import {
  AppActionTypes,
  SetName,
  ActionToReturn,
  EffectReturnTest,
  NoopAction
} from "./app.actions";
import { of } from "rxjs";

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions, private http: HttpClient) {}

  @Effect()
  callWithoutError$ = this.actions$.pipe(
    ofType(AppActionTypes.CallWithoutError),
    switchMap(() => {
      console.log("Calling api without error");

      return this.http.get<any>(`https://swapi.co/api/people/1`).pipe(
        map(results => results.name),
        switchMap(name => of(new SetName(name)))
      );
    }),
    catchError(error => of(new SetName("Error!")))
  );

  @Effect()
  callWithError$ = this.actions$.pipe(
    ofType(AppActionTypes.CallWithError),
    switchMap(() => {
      console.log("Calling api with error - stop listening");

      return this.http.get<any>(`https://swapi.co/apix/people/1`).pipe(
        map(results => results.name),
        switchMap(name => of(new SetName(name)))
      );
    }),
    catchError(error => of(new SetName("Error - You're doomed!")))
  );

  @Effect()
  callWithErrorKeepListening$ = this.actions$.pipe(
    ofType(AppActionTypes.CallWithErrorKeepListening),
    switchMap(() => {
      console.log("Calling api with error - keep listening");

      return this.http.get<any>(`https://swapi.co/apix/people/1`).pipe(
        map(results => results.name),
        switchMap(name => of(new SetName(name))),
        catchError(error => of(new SetName("Error but still listening!")))
      );
    })
  );

  @Effect()
  callWithErrorDontCatch$ = this.actions$.pipe(
    ofType(AppActionTypes.CallWithErrorNotCaught),
    switchMap(() => {
      console.log("Calling api with error - don't catch");

      return this.http.get<any>(`https://swapi.co/apix/people/1`).pipe(
        map(results => results.name),
        switchMap(name => of(new SetName(name)))
      );
    })
  );

  @Effect()
  effectReturnTest$ = this.actions$.pipe(
    ofType<EffectReturnTest>(AppActionTypes.EffectReturnTest),
    switchMap(action => {
      switch (action.payload) {
        case 0:
          return of(new ActionToReturn("Some string"));

        case 2:
          return of(new NoopAction());
      }
    }),
    catchError(error => {
      // For case 1 above, this isn't caught, we would of course never want to catch an error here.
      console.log("Error!", error);
      return of(new NoopAction());
    }),
    finalize(() => console.log("Should never get to finalize!"))
  );
}
