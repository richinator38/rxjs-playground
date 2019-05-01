import { Action } from "@ngrx/store";
import { AppActionTypes, SetName, ActionToReturn } from "../app.actions";

export interface State {
  name: string;
  someString: string;
}

export const initialState: State = {
  name: "",
  someString: null
};

export function reducer(state = initialState, action: Action): State {
  switch (action.type) {
    case AppActionTypes.SetName: {
      return {
        ...state,
        name: (<SetName>action).payload
      };
    }

    case AppActionTypes.ActionToReturn: {
      return {
        ...state,
        someString: (<ActionToReturn>action).payload
      };
    }

    default:
      return state;
  }
}

export const getName = (state: State) => state.name;
export const getSomeString = (state: State) => state.someString;
