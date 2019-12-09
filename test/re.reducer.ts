
  import { Reducer } from "react";
  import { reState, reAction } from "./re.types";

  export const reInitialState: reState = {
    foo: true,
  };

  export const reReducer: Reducer<reState, reAction> = (
    state,
    action
  ) => {
    switch (action.type) {
      case "SET_STATE":
        return { ...state, ...action.payload };
      default:
        throw new Error("An invalid action type was used");
    }
  };
