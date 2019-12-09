
  import { setState } from "./re.actions";
  export type reState = {
    foo: true;
  };

  export type reProps = {
    foo: true;
  };

  export type reAction = ReturnType<
    typeof setState 
  >;
