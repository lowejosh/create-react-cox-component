
  import { SliderInitialState } from "./Slider.reducer";
  import { SliderState, SliderAction } from "./Slider.types";
  import { createContext, Dispatch } from "react";

  export const SliderContextState = createContext<SliderState>(
    SliderInitialState
  );

  export const SliderContextDispatch = createContext<
    Dispatch<SliderAction> | undefined
  >(undefined);
