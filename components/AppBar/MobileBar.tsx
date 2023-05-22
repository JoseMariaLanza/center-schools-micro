import {Dispatch, Fragment, SetStateAction} from "react";
import {Dialog, Tab, Transition} from "@headlessui/react";
import {XMarkIcon} from "@heroicons/react/24/outline";
import ActiveLink from "./ActiveLink";
import {navigation} from "@/app/shared/utils/constants";

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(" ");
}

interface MobileProps {
	open: boolean;
	setOpen: Dispatch<SetStateAction<boolean>>;
	selected: number;
	setSelected: Dispatch<SetStateAction<number>>;
}

const MobileBar = ({open, setOpen, selected, setSelected}: MobileProps) => {
	const selectTab = ({selected}: {selected: boolean}) =>
		classNames(
			selected
				? "border-indigo-600 text-indigo-600"
				: "border-transparent text-gray-900",
			"flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium",
		);

	return (
		<Transition.Root show={open} as={Fragment}>
			<Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
				<Transition.Child
					as={Fragment}
					enter="transition-opacity ease-linear duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="transition-opacity ease-linear duration-300"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="fixed inset-0 bg-black bg-opacity-25" />
				</Transition.Child>

				<div className="fixed inset-0 z-40 flex">
					<Transition.Child
						as={Fragment}
						enter="transition ease-in-out duration-300 transform"
						enterFrom="-translate-x-full"
						enterTo="translate-x-0"
						leave="transition ease-in-out duration-300 transform"
						leaveFrom="translate-x-0"
						leaveTo="-translate-x-full"
					>
						<Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
							<div className="flex px-4 pb-2 pt-5">
								<button
									type="button"
									className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
									onClick={() => setOpen(false)}
								>
									<span className="sr-only">Close menu</span>
									<XMarkIcon className="h-6 w-6" aria-hidden="true" />
								</button>
							</div>

							{/* Links */}
							<Tab.Group>
								<Tab.List>
									<div className="space-y-6 border-t border-gray-200 px-4 py-6">
										{navigation.pages.map((page) => (
											<ActiveLink
												key={page.name}
												item={page}
												selected={selected}
												setSelected={setSelected}
												defaultClasses="-m-2 block p-2 font-medium text-gray-900"
												classNames={classNames}
											/>
										))}
									</div>
								</Tab.List>
							</Tab.Group>

							<Tab.Group as="div" className="mt-2">
								<div className="border-b border-gray-200">
									<Tab.List className="-mb-px flex space-x-8 px-4">
										{navigation.groups.map((category) => (
											<Tab key={category.name} className={selectTab}>
												{category.name}
											</Tab>
										))}
									</Tab.List>
								</div>
								<Tab.Panels as={Fragment}>
									{navigation.groups.map((category) => (
										<Tab.Panel
											key={category.name}
											className="space-y-10 px-4 pb-8 pt-10"
										>
											<div className="grid grid-cols-2 gap-x-4">
												{category.groupList.map((item) => (
													<div
														key={item.name}
														className="group relative text-sm"
													>
														<div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
															<img
																src={item.imageSrc}
																alt={item.imageAlt}
																className="object-cover object-center"
															/>
														</div>
														<a
															href={item.href}
															className="mt-6 block font-medium text-gray-900"
														>
															<span
																className="absolute inset-0 z-10"
																aria-hidden="true"
															/>
															{item.name}
														</a>
														<p aria-hidden="true" className="mt-1">
															View this school
														</p>
													</div>
												))}
											</div>
											{category.sections.map((section) => (
												<div key={section.name}>
													<p
														id={`${category.id}-${section.id}-heading-mobile`}
														className="font-medium text-gray-900"
													>
														{section.name}
													</p>
													<ul
														role="list"
														aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
														className="mt-6 flex flex-col space-y-6"
													>
														{section.items.map((item) => (
															<li key={item.name} className="flow-root">
																<a
																	href={item.href}
																	className="-m-2 block p-2 text-gray-500"
																>
																	{item.name}
																</a>
															</li>
														))}
													</ul>
												</div>
											))}
										</Tab.Panel>
									))}
								</Tab.Panels>
							</Tab.Group>

							<div className="space-y-6 border-t border-gray-200 px-4 py-6">
								<div className="flow-root">
									<a
										href="#"
										className="-m-2 block p-2 font-medium text-gray-900"
									>
										Sign in
									</a>
								</div>
								<div className="flow-root">
									<a
										href="#"
										className="-m-2 block p-2 font-medium text-gray-900"
									>
										Create account
									</a>
								</div>
							</div>
						</Dialog.Panel>
					</Transition.Child>
				</div>
			</Dialog>
		</Transition.Root>
	);
};

export default MobileBar;