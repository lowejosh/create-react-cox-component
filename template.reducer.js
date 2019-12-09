const reducer = componentName => `
  import { Reducer } from "react";
  import { ${componentName}State, ${componentName}Action } from "./${componentName}.types";

  export const ${componentName}InitialState: ${componentName}State = {
    foo: true,
  };

  export const ${componentName}Reducer: Reducer<${componentName}State, ${componentName}Action> = (
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
`;

module.exports = reducer;
