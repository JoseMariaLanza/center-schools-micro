import {NavigationItem} from "@/app/shared/utils/types";
import React, {Dispatch, SetStateAction} from "react";
import Buttons from "./AuthButtons";
import Menu from "./AuthMenu";

export interface AccountNavigationProps {
	render?: string;
	setSelected: Dispatch<SetStateAction<NavigationItem>>;
}

const Auth = ({render, setSelected}: AccountNavigationProps) => {
	const isLoggedIn = true;

	return (
		<>
			{isLoggedIn ? (
				<Menu render={render} setSelected={setSelected} />
			) : (
				<Buttons render={render} />
			)}
		</>
	);
};

export default Auth;
