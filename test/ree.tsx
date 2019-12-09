
  import { reeContainer } from "./ree.styles";
  import React, { FunctionComponent, useReducer } from "react";
  import { reeProps } from "./ree.types";
  import {
    reeContextState,
    reeContextDispatch
  } from "./ree.context";
  import {
    reeReducer,
    reeInitialState
  } from "./ree.reducer";

  export const ree: FunctionComponent<reeProps> = ({
  }) => {
    const [state, dispatch] = useReducer(
      reeReducer,
      reeInitialState
    );

    return (
    <reeContextState.Provider value={state}>
      <reeContextDispatch.Provider value={dispatch}>
        <reeContainer>
          {ree}
        </reeContainer>
      </reeContextDispatch.Provider>
    </reeContextState.Provider>
    )
  };
