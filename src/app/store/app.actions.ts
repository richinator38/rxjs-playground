import { Action } from "@ngrx/store";

export enum AppActionTypes {
  CallWithoutError = "[App] CallWithoutError",
  CallWithError = "[App] CallWithError",
  CallWithErrorKeepListening = "[App] CallWithErrorKeepListening",
  CallWithErrorNotCaught = "[App] CallWithErrorNotCaught",
  SetName = "[App] SetName"
}

export class CallWithoutError implements Action {
  readonly type = AppActionTypes.CallWithoutError;
}

export class CallWithError implements Action {
  readonly type = AppActionTypes.CallWithError;
}

export class CallWithErrorKeepListening implements Action {
  readonly type = AppActionTypes.CallWithErrorKeepListening;
}

export class CallWithErrorNotCaught implements Action {
  readonly type = AppActionTypes.CallWithErrorNotCaught;
}

export class SetName implements Action {
  readonly type = AppActionTypes.SetName;

  constructor(public payload: string) {}
}

export type AppActions =
  | CallWithoutError
  | CallWithError
  | CallWithErrorKeepListening
  | CallWithErrorNotCaught
  | SetName;
