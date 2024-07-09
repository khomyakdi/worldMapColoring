import { createContext } from "react";

/*
  groups: {
    name: {
      name: string,
      color: string,
      codes: [string]
    }
  }
*/

const GroupsContext = createContext({
    groups: {},
});

export default GroupsContext;
