"use client";

import {Dispatch, SetStateAction, useEffect, useState, ReactNode} from "react";
import MobileNavBar from "./Mobile";
import WebNavBar from "./Web";
import {NavigationItem} from "../../app/shared/utils/types";
import {navigation} from "@/app/shared/utils/constants";
import {Popover, Disclosure} from "@headlessui/react";
import Groups from "./Groups";
import MobileMenu from "./Mobile/Menu";

export interface NavBarProps {
	open?: boolean;
	children: ReactNode;
	mobileMenu?: ReactNode;
	selected: NavigationItem;
	setSelected: Dispatch<SetStateAction<NavigationItem>>;
}

export interface MobileNavBarProps {
	menuOpen: boolean;
	setMenuOpen: Dispatch<SetStateAction<boolean>>;
	selected: NavigationItem;
	setSelected: Dispatch<SetStateAction<NavigationItem>>;
	selectTab: (selected: boolean) => string;
}

const AppBar = () => {
	const [domReady, setDomReady] = useState(false);
	const [selected, setSelected] = useState(navigation.pages[0]);
	const [webPopupContainer, setPopupContainer] = useState<HTMLElement | null>(
		null,
	);
	const [mobilePopupContainer, setMobilePopupContainer] =
		useState<HTMLElement | null>(null);

	useEffect(() => {
		setDomReady(true);
		const webPopoverContentEl = document.getElementById("web-popover-content");
		const mobilePopoverContentEl = document.getElementById(
			"mobile-popover-content",
		);
		setPopupContainer(webPopoverContentEl);
		setMobilePopupContainer(mobilePopoverContentEl);
	}, []);

	return (
		<div className="bg-white shadow">
			<header>
				<p className="flex h-10 items-center justify-center bg-white px-4 text-sm font-bold text-indigo-600 sm:px-6 lg:px-8">
					¡Manage Facebook, Instagram, Twitter and more social networks from one
					place!
				</p>
			</header>

			<div className="min-h-full">
				<Disclosure as="nav" className="bg-gray-800">
					{({open}) => (
						<>
							<WebNavBar
								selected={selected}
								setSelected={setSelected}
								mobileMenu={<MobileMenu open={open} />}
							>
								{domReady ? (
									<Popover.Group className="hidden lg:ml-4 lg:block lg:self-stretch">
										<Groups popupContainer={webPopupContainer} />
									</Popover.Group>
								) : null}
							</WebNavBar>

							<MobileNavBar selected={selected} setSelected={setSelected}>
								{domReady ? (
									<Popover.Group className="relative lg:hidden sm:ml-8 sm:block sm:self-stretch">
										<Groups popupContainer={mobilePopupContainer} />
									</Popover.Group>
								) : null}
							</MobileNavBar>
						</>
					)}
				</Disclosure>

				<header>
					<div className="w-full bg-white mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
						<h1 className="text-3xl font-bold tracking-tight text-gray-800">
							{selected.label}
						</h1>
					</div>
				</header>

				<div
					id="mobile-popover-content"
					className="lg:hidden lg:block lg:self-stretch"
				></div>

				<div
					id="web-popover-content"
					className="absolute w-full hidden lg:block lg:self-stretch"
				></div>
			</div>
		</div>
	);
};

export default AppBar;
