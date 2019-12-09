
  import { setState } from "./ree.actions";
  export type reeState = {
    foo: true;
  };

  export type reeProps = {
    foo: true;
  };

  export type reeAction = ReturnType<
    typeof setState 
  >;
