const types = componentName => `  import { setState } from "./${componentName}.actions";
export type ${componentName}State = {
  foo: true;
};

export type ${componentName}Props = {
  foo: true;
};

export type ${componentName}Action = ReturnType<
  typeof setState 
>;`;

module.exports = types;
