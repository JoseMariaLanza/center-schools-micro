import React, {Dispatch, SetStateAction} from "react";
import Web from "./Web/AuthMenu";
import Mobile from "./Mobile/AuthMenu";
import {NavigationItem} from "../../app/shared/utils/types";

interface Props {
	render?: string;
	setSelected: Dispatch<SetStateAction<NavigationItem>>;
}

const AuthMenu = ({setSelected, render}: Props) => {
	return (
		<>
			{render === "mobile" ? (
				<Mobile setSelected={setSelected} />
			) : (
				<Web setSelected={setSelected} />
			)}
		</>
	);
};

const Menu = ({render, setSelected}: Props) => {
	return <AuthMenu setSelected={setSelected} render={render} />;
};

export default Menu;
