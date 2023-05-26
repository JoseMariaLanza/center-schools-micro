import React, {Dispatch, SetStateAction} from "react";

interface Props {
	setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const AuthButtons = ({setIsOpen}: Props) => {
	return (
		<div className="ml-auto flex items-center">
			<div className="hidden md:flex md:flex-1 md:items-center md:justify-end md:space-x-6">
				<button
					onClick={() => setIsOpen(true)}
					className="text-sm font-medium text-gray-300 hover:text-white"
				>
					Sign in
				</button>
				<span className="h-6 w-px bg-gray-200" aria-hidden="true" />
				<button className="text-sm font-medium text-gray-300 hover:text-white">
					Create account
				</button>
			</div>
		</div>
	);
};

export default AuthButtons;
