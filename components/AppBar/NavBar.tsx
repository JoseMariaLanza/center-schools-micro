import {Fragment, useEffect, useState} from "react";
import {Disclosure, Menu, Popover, Transition} from "@headlessui/react";
import {Bars3Icon, BellIcon, XMarkIcon} from "@heroicons/react/24/outline";
import Image from "next/image";
import logo from "@/public/logoITF.png";
import NavigationLink from "../../app/shared/components/NavigationLink";
import {navigation} from "@/app/shared/utils/constants";
import Account from "../Account";
import {NavBarProps} from ".";
import {classNames} from "@/app/shared/helpers/classNames";
import Groups from "./Groups";

const user = {
	name: "Tom Cook",
	email: "tom@example.com",
	imageUrl:
		"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

const userNavigation = [
	{name: "Your Profile", href: "/profile"},
	{name: "Dashboard", href: "/dashboard"},
	{name: "Settings", href: "settings"},
	{name: "Sign out", href: "/logout"},
];

export default function AppBar({selected, setSelected}: NavBarProps) {
	const [webPopupContainer, setPopupContainer] = useState<HTMLElement | null>(
		null,
	);
	const [mobilePopupContainer, setMobilePopupContainer] =
		useState<HTMLElement | null>(null);

	const [domReady, setDomReady] = useState(false);

	useEffect(() => {
		setDomReady(true);
		// if (domReady) {
		const webPopoverContentEl = document.getElementById("web-popover-content");
		const mobilePopoverContentEl = document.getElementById(
			"mobile-popover-content",
		);
		setPopupContainer(webPopoverContentEl);
		setMobilePopupContainer(mobilePopoverContentEl);
		// }
	}, []);

	return (
		<div className="min-h-full">
			<Disclosure as="nav" className="bg-gray-800">
				{({open}) => (
					<>
						{/* Web NavBar */}
						<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
							<div className="flex h-16 items-center justify-between">
								<div className="flex items-center">
									<div className="flex-shrink-0">
										<Image src={logo} alt="I.T.F." className="h-14 w-auto" />
									</div>
									{/* Pages */}
									<div className="hidden md:flex">
										<div className="ml-10 flex-1 items-baseline space-x-4">
											{navigation.pages.map((item) => (
												<NavigationLink
													key={item.id}
													item={item}
													setSelected={setSelected}
													className={classNames(
														selected.id === item.id
															? "bg-gray-900 text-white border-b-2"
															: "text-gray-300 hover:bg-gray-700 hover:text-white",
														"rounded-sm px-3 py-5 text-sm font-medium h-full",
													)}
												/>
											))}
										</div>
									</div>

									{/* Category groups */}

									{domReady ? (
										<Popover.Group className="hidden lg:ml-4 lg:block lg:self-stretch">
											<Groups popupContainer={webPopupContainer} />
										</Popover.Group>
									) : null}
								</div>

								{/* Profile (Account) dropdown - Web NavBar */}
								<div className="hidden md:block">
									<div className="ml-4 flex items-center md:ml-6">
										<Account setSelected={setSelected} />
									</div>
								</div>

								{/* Hidden mobile menu button - Mobile NavBar */}
								<div className="-mr-2 flex md:hidden">
									<Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
										<span className="sr-only">Open main menu</span>
										{open ? (
											<XMarkIcon className="block h-6 w-6" aria-hidden="true" />
										) : (
											<Bars3Icon className="block h-6 w-6" aria-hidden="true" />
										)}
									</Disclosure.Button>
								</div>
							</div>
						</div>

						{/* Hidden mobile menu */}
						<Disclosure.Panel className="md:hidden">
							<div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
								{navigation.pages.map((item) => (
									<Disclosure.Button
										as={NavigationLink}
										key={item.id}
										item={item}
										setSelected={setSelected}
										className={classNames(
											selected.id === item.id
												? "bg-gray-900 text-white"
												: "text-gray-300 hover:bg-gray-700 hover:text-white",
											"block rounded-md px-3 py-2 text-base font-medium",
										)}
									/>
								))}
							</div>

							{/* Profile (Account) dropdown - Mobile Menu */}
							<Account setSelected={setSelected} render="mobile" />
						</Disclosure.Panel>
						{domReady ? (
							<Popover.Group className="relative lg:hidden sm:ml-8 sm:block sm:self-stretch">
								<Groups popupContainer={mobilePopupContainer} />
							</Popover.Group>
						) : null}
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
	);
}
