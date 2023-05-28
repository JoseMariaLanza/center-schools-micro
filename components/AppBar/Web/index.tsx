import Image from "next/image";
import NavigationLink from "@/app/shared/components/NavigationLink";
import Account from "@/components/Account";
import {NavBarProps} from "..";
import logo from "@/public/logoITF.png";
import {navigation} from "@/app/shared/utils/constants";
import {classNames} from "@/app/shared/helpers/classNames";

const WebNavBar = ({
	children,
	mobileMenu,
	selected,
	setSelected,
}: NavBarProps) => {
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
							<div className="ml-4 flex-1 items-baseline space-x-4">
								{navigation.pages.map((item) => (
									<NavigationLink
										key={`web-nav-${item.id}`}
										keyPrefix="link-web-nav"
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
						<div className="ml-2 flex items-center md:ml-6">
							<Account setSelected={setSelected} />
						</div>
					</div>

					{mobileMenu}
				</div>
			</div>
		</>
	);
};

export default WebNavBar;
