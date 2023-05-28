import {Disclosure} from "@headlessui/react";
import {BellIcon} from "@heroicons/react/24/outline";
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
		<div className="border-t border-gray-700 pb-3 pt-4">
			<div className="flex items-center px-5">
				<div className="flex-shrink-0">
					<img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
				</div>
				<div className="ml-3">
					<div className="text-base font-medium leading-none text-white">
						{user.name}
					</div>
					<div className="text-sm font-medium leading-none text-gray-400">
						{user.email}
					</div>
				</div>
				<button
					type="button"
					className="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
				>
					<span className="sr-only">View notifications</span>
					<BellIcon className="h-6 w-6" aria-hidden="true" />
				</button>
			</div>
			<div className="mt-3 space-y-1 px-2">
				{userNavigation.map((item) => (
					<Disclosure.Button
						key={`disclosure-mobile-auth-${item.id}`}
						keyPrefix="link-mobile-auth"
						as={NavigationLink}
						item={item}
						setSelected={setSelected}
						className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
					/>
				))}
			</div>
		</div>
	);
};

export default AuthMenu;
