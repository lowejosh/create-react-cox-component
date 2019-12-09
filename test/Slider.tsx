
  import { SliderContainer } from "./Slider.styles";
  import React, { FunctionComponent, useReducer } from "react";
  import { SliderProps } from "./Slider.types";
  import {
    SliderContextState,
    SliderContextDispatch
  } from "./Slider.context";
  import {
    SliderReducer,
    SliderInitialState
  } from "./Slider.reducer";

  export const Slider: FunctionComponent<SliderProps> = ({
  }) => {
    const [state, dispatch] = useReducer(
      SliderReducer,
      SliderInitialState
    );

    return Slider;
  };
