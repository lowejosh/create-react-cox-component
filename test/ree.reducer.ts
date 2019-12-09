
  import { Reducer } from "react";
  import { reeState, reeAction } from "./ree.types";

  export const reeInitialState: reeState = {
    foo: true,
  };

  export const reeReducer: Reducer<reeState, reeAction> = (
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
