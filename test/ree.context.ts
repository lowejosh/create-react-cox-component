
  import { reeInitialState } from "./ree.reducer";
  import { reeState, reeAction } from "./ree.types";
  import { createContext, Dispatch } from "react";

  export const reeContextState = createContext<reeState>(
    reeInitialState
  );

  export const reeContextDispatch = createContext<
    Dispatch<reeAction> | undefined
  >(undefined);
