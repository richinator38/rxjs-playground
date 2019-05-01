import { Action } from "@ngrx/store";

export enum AppActionTypes {
  CallWithoutError = "[App] CallWithoutError",
  CallWithError = "[App] CallWithError",
  CallWithErrorKeepListening = "[App] CallWithErrorKeepListening",
  CallWithErrorNotCaught = "[App] CallWithErrorNotCaught",
  SetName = "[App] SetName",
  EffectReturnTest = "[App] EffectReturnTest",
  ActionToReturn = "[App] ActionToReturn",
  NoopAction = "[App] NoopAction"
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

export class EffectReturnTest implements Action {
  readonly type = AppActionTypes.EffectReturnTest;

  constructor(public payload: number) {}
}

export class ActionToReturn implements Action {
  readonly type = AppActionTypes.ActionToReturn;

  constructor(public payload: string) {}
}

export class NoopAction implements Action {
  readonly type = AppActionTypes.NoopAction;
}

export type AppActions =
  | CallWithoutError
  | CallWithError
  | CallWithErrorKeepListening
  | CallWithErrorNotCaught
  | SetName
  | EffectReturnTest
  | ActionToReturn
  | NoopAction;
