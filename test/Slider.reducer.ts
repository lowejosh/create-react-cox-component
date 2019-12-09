
  import { Reducer } from "react";
  import { SliderState, SliderAction } from "./Slider.types";

  export const SliderInitialState: SliderState = {
    foo: true,
  };

  export const SliderReducer: Reducer<SliderState, SliderAction> = (
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
