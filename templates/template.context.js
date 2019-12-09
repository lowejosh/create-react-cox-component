const context = componentName => `import { ${componentName}InitialState } from "./${componentName}.reducer";
import { ${componentName}State, ${componentName}Action } from "./${componentName}.types";
import { createContext, Dispatch } from "react";

export const ${componentName}ContextState = createContext<${componentName}State>(
  ${componentName}InitialState
);

export const ${componentName}ContextDispatch = createContext<
  Dispatch<${componentName}Action> | undefined
>(undefined);`;

module.exports = context;
