import { Component, OnInit } from "@angular/core";
import { catchError } from "rxjs/operators";
import { of, throwError, Observable } from "rxjs";
import { Store } from "@ngrx/store";

import { RxjsService } from "./services/rxjs.service";
import * as fromRoot from "./store/reducers";
import {
  CallWithoutError,
  CallWithError,
  CallWithErrorKeepListening,
  CallWithErrorNotCaught
} from "./store/app.actions";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "RxJS Playground";
  name$: Observable<string>;

  constructor(
    private rxjsService: RxjsService,
    private store: Store<fromRoot.State>
  ) {}

  ngOnInit(): void {
    this.rxjsService.subject
      .pipe(
        catchError(error => {
          console.log("Error in catchError", error);
          return of(error);
        })
      )
      .subscribe(
        value => {
          console.log("Subject value:", value);
        },
        error => console.log("Error!", error)
      );

    this.name$ = this.store.select(fromRoot.getName);
  }

  pokeSubject(value: boolean) {
    this.rxjsService.nextSubject(value);
  }

  errorSubject() {
    this.rxjsService.errorSubject();
  }

  ngrxSuccess() {
    this.store.dispatch(new CallWithoutError());
  }

  ngrxError() {
    this.store.dispatch(new CallWithError());
  }

  ngrxErrorKeepListening() {
    this.store.dispatch(new CallWithErrorKeepListening());
  }

  ngrxErrorDontCatch() {
    this.store.dispatch(new CallWithErrorNotCaught());
  }
}
