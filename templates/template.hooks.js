const hooks = componentName => `import { useContext } from "react";
import {
${componentName}ContextState,
${componentName}ContextDispatch
} from "./${componentName}.context";

export const use${componentName}ContextState = () => {
const context = useContext(${componentName}ContextState);

if (context === undefined) {
    throw new Error(
    "use${componentName}ContextState should be used within an use${componentName}ContextState provider"
    );
}

return context;
};

export const use${componentName}ContextDispatch = () => {
const context = useContext(${componentName}ContextDispatch);

if (context === undefined) {
    throw new Error(
    "use${componentName}ContextDispatch should be used within an use${componentName}ContextDispatch provider"
    );
}

return context;
};`;

module.exports = hooks;
