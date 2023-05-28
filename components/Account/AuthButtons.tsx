import React, {Dispatch, SetStateAction, useState} from "react";
import Web from "./Web/AuthButtons";
import Mobile from "./Mobile/AuthButtons";
import TheModal from "../TheModal/index";
import Login from "./Login";

interface Props {
	render?: string;
}

interface ExtendedProps extends Props {
	setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const AuthButtons = ({setIsOpen, render}: ExtendedProps) => {
	return (
		<>
			{render === "mobile" ? (
				<Mobile setIsOpen={setIsOpen} />
			) : (
				<Web setIsOpen={setIsOpen} />
			)}
		</>
	);
};

const Buttons = ({render}: Props) => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<AuthButtons setIsOpen={setIsOpen} render={render} />
			<TheModal isOpen={isOpen} setIsOpen={setIsOpen}>
				<Login />
			</TheModal>
		</>
	);
};

export default Buttons;
