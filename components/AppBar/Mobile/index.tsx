import NavigationLink from "@/app/shared/components/NavigationLink";
import {NavBarProps} from "..";
import {navigation} from "@/app/shared/utils/constants";
import {classNames} from "@/app/shared/helpers/classNames";
import {Disclosure} from "@headlessui/react";
import Account from "@/components/Account";

const MobileNavBar = ({children, selected, setSelected}: NavBarProps) => {
	return (
		<>
			{/* Hidden mobile menu */}
			<Disclosure.Panel className="md:hidden">
				<div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
					{navigation.pages.map((item) => (
						<Disclosure.Button
							as={NavigationLink}
							key={`mobile-nav-${item.id}`}
							keyPrefix="link-mobile-nav"
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
			{children}
		</>
	);
};

export default MobileNavBar;
