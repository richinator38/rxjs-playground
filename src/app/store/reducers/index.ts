import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from "@ngrx/store";
import { environment } from "../../../environments/environment";

import * as fromApp from "./app.reducers";

export interface State {
  app: fromApp.State;
}

export const reducers: ActionReducerMap<State> = {
  app: fromApp.reducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];

export const getAppFeature = createFeatureSelector("app");

export const getName = createSelector(
  getAppFeature,
  fromApp.getName
);

export const getSomeString = createSelector(
  getAppFeature,
  fromApp.getSomeString
);
