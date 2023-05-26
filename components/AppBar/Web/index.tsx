import Image from "next/image";
import NavigationLink from "@/app/shared/components/NavigationLink";
import Account from "@/components/Account";
import {NavBarProps} from "..";
import logo from "@/public/logoITF.png";
import {navigation} from "@/app/shared/utils/constants";
import {classNames} from "@/app/shared/helpers/classNames";
import {Disclosure} from "@headlessui/react";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/outline";

const WebNavBar = ({open, children, selected, setSelected}: NavBarProps) => {
	return (
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
						{children}
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
		</>
	);
};

export default WebNavBar;
