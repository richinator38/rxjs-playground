import { Action } from "@ngrx/store";
import { AppActionTypes, SetName } from "../app.actions";

export interface State {
  name: string;
}

export const initialState: State = {
  name: ""
};

export function reducer(state = initialState, action: Action): State {
  switch (action.type) {
    case AppActionTypes.SetName: {
      return {
        ...state,
        name: (<SetName>action).payload
      };
    }

    default:
      return state;
  }
}

export const getName = (state: State) => state.name;
