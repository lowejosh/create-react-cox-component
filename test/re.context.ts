
  import { reInitialState } from "./re.reducer";
  import { reState, reAction } from "./re.types";
  import { createContext, Dispatch } from "react";

  export const reContextState = createContext<reState>(
    reInitialState
  );

  export const reContextDispatch = createContext<
    Dispatch<reAction> | undefined
  >(undefined);
