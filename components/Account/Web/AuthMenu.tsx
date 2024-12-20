import {Disclosure, Menu, Transition} from "@headlessui/react";
import {Bars3Icon, BellIcon, XMarkIcon} from "@heroicons/react/24/outline";
import Image from "next/image";
import {Fragment} from "react";
import {classNames} from "@/app/shared/helpers/classNames";
import NavigationLink from "@/app/shared/components/NavigationLink";
import {AccountNavigationProps} from "..";

const user = {
	name: "Tom Cook",
	email: "tom@example.com",
	imageUrl:
		"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

const userNavigation = [
	{
		id: 1,
		name: "Your Profile",
		label: "Profile:",
		href: "/profile",
		current: false,
	},
	{
		id: 2,
		name: "Dashboard",
		label: "Dashboard:",
		href: "/dashboard",
		current: false,
	},
	{
		id: 3,
		name: "Settings",
		label: "Settings:",
		href: "/settings",
		current: false,
	},
	{
		id: 4,
		name: "Sign out",
		label: "Signing out...",
		href: "/logout",
		current: false,
	},
];

const AuthMenu = ({setSelected}: AccountNavigationProps) => {
	return (
		<>
			<button
				type="button"
				className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
			>
				<span className="sr-only">View notifications</span>
				<BellIcon className="h-6 w-6" aria-hidden="true" />
			</button>
			<Menu as="div" className="relative">
				<div>
					<Menu.Button className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
						<span className="sr-only">Open user menu</span>
						<img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
					</Menu.Button>
				</div>
				<Transition
					as={Fragment}
					enter="transition ease-out duration-100"
					enterFrom="transform opacity-0 scale-95"
					enterTo="transform opacity-100 scale-100"
					leave="transition ease-in duration-75"
					leaveFrom="transform opacity-100 scale-100"
					leaveTo="transform opacity-0 scale-95"
				>
					<Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
						{userNavigation.map((item) => (
							<Menu.Item key={`menu-web-auth-${item.id}`}>
								{({active}) => (
									<NavigationLink
										keyPrefix="link-web-auth"
										item={item}
										setSelected={setSelected}
										className={classNames(
											active
												? "bg-gray-100"
												: "hover:text-white hover:bg-gray-800",
											"block px-4 py-2 text-sm text-gray-800",
										)}
									/>
								)}
							</Menu.Item>
						))}
					</Menu.Items>
				</Transition>
			</Menu>
		</>
	);
};

export default AuthMenu;
