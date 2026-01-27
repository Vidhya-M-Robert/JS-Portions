//create a global box called AuthContext

import { createContext } from "react";

export const AuthContext = createContext (null);         //Default value is null if someone reads this context without a Provider.