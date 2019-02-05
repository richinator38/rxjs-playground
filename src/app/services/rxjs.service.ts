import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({ providedIn: "root" })
export class RxjsService {
  subject = new Subject<boolean>();

  nextSubject(value: boolean) {
    this.subject.next(value);
  }

  errorSubject() {
    this.subject.error(new Error("Rich is testing"));
  }
}
