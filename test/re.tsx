
  import { reContainer } from "./re.styles";
  import React, { FunctionComponent, useReducer } from "react";
  import { reProps } from "./re.types";
  import {
    reContextState,
    reContextDispatch
  } from "./re.context";
  import {
    reReducer,
    reInitialState
  } from "./re.reducer";

  export const re: FunctionComponent<reProps> = ({
  }) => {
    const [state, dispatch] = useReducer(
      reReducer,
      reInitialState
    );

    return (
    <reContextState.Provider value={state}>
      <reContextDispatch.Provider value={dispatch}>
        <reContainer>
          {re}
        </reContainer>
      </reContextDispatch.Provider>
    </reContextState.Provider>
    )
  };
