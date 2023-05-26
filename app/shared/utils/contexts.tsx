import {createContext} from "react";
import {navigation} from "./constants";

export const NavigationContext = createContext(navigation);
export const ThemeContext = createContext("light");
export const RenderMobileContext = createContext(false);
