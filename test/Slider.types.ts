
  import { setState } from "./Slider.actions";
  export type SliderState = {
    foo: true;
  };

  export type SliderProps = {
    foo: true;
  };

  export type SliderAction = ReturnType<
    typeof setState 
  >;
