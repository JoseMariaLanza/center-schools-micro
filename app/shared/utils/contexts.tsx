import {createContext} from "react";
import {navigation} from "./constants";

export const GroupsContext = createContext(navigation.groups);
export const ThemeContext = createContext("light");
export const RenderMobileContext = createContext(false);
