const component = componentName => `
  import { ${componentName}Container } from "./${componentName}.styles";
  import React, { FunctionComponent, useReducer } from "react";
  import { ${componentName}Props } from "./${componentName}.types";
  import {
    ${componentName}ContextState,
    ${componentName}ContextDispatch
  } from "./${componentName}.context";
  import {
    ${componentName}Reducer,
    ${componentName}InitialState
  } from "./${componentName}.reducer";

  export const ${componentName}: FunctionComponent<${componentName}Props> = ({
  }) => {
    const [state, dispatch] = useReducer(
      ${componentName}Reducer,
      ${componentName}InitialState
    );

    return (
    <${componentName}ContextState.Provider value={state}>
      <${componentName}ContextDispatch.Provider value={dispatch}>
        <${componentName}Container>
          {${componentName}}
        </${componentName}Container>
      </${componentName}ContextDispatch.Provider>
    </${componentName}ContextState.Provider>
    )
  };
`;

module.exports = component;
