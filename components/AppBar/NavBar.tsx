/*
	This example requires some changes to your config:
  
	```
	// tailwind.config.js
	module.exports = {
		// ...
		plugins: [
			// ...
			require('@tailwindcss/aspect-ratio'),
		],
	}
	```
*/

"use client";

import {Fragment, useState} from "react";
import {Popover, Tab, Transition} from "@headlessui/react";
import {Bars3Icon, MagnifyingGlassIcon} from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logoITF.png";
import MobileBar from "./MobileBar";
import ActiveLink from "./ActiveLink";
import {navigation} from "@/app/shared/utils/constants";

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(" ");
}

export default function AppBar() {
	const [open, setOpen] = useState(false);
	const [selected, setSelected] = useState(1);

	const selectTab = (selected: boolean) => {
		return classNames(
			selected
				? "border-indigo-600 text-indigo-600"
				: "border-transparent text-gray-700 hover:text-gray-800",
			"relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out",
		);
	};

	return (
		<div className="bg-white">
			{/* Mobile menu */}
			<MobileBar
				open={open}
				setOpen={setOpen}
				selected={selected}
				setSelected={setSelected}
			/>

			<header className="relative bg-white">
				<p className="flex h-10 items-center justify-center bg-gray-800 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
					Manage Facebook, Instagram, Twitter and more social networks from one
					place.
				</p>

				<nav
					aria-label="Top"
					className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
				>
					<div className="border-b border-gray-200">
						<div className="flex h-16 items-center">
							<button
								type="button"
								className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
								onClick={() => setOpen(true)}
							>
								<span className="sr-only">Open menu</span>
								<Bars3Icon className="h-6 w-6" aria-hidden="true" />
							</button>

							{/* Logo */}
							<div className="ml-4 flex lg:ml-0">
								<a href="#">
									<span className="sr-only">Your Company</span>
									<Image src={logo} alt="I.T.F." className="h-14 w-auto" />
								</a>
							</div>

							{/* Flyout menus */}
							<Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
								<div className="flex h-full space-x-8">
									{navigation.pages.map((page) => (
										<ActiveLink
											key={page.name}
											item={page}
											selected={selected}
											setSelected={setSelected}
											defaultClasses="flex items-center text-sm font-medium text-gray-700 hover:text-indigo-600"
											classNames={classNames}
										/>
									))}

									{navigation.groups.map((groups) => (
										<Popover key={groups.name} className="flex">
											{({open}) => (
												<>
													<div className="relative flex">
														<Popover.Button className={selectTab(open)}>
															{groups.name}
														</Popover.Button>
													</div>

													<Transition
														as={Fragment}
														enter="transition ease-out duration-200"
														enterFrom="opacity-0"
														enterTo="opacity-100"
														leave="transition ease-in duration-150"
														leaveFrom="opacity-100"
														leaveTo="opacity-0"
													>
														<Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500">
															{/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
															<div
																className="absolute inset-0 top-1/2 bg-white shadow"
																aria-hidden="true"
															/>

															<div className="relative bg-white">
																<div className="mx-auto max-w-7xl px-8">
																	<div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
																		<div className="col-start-2 grid grid-cols-2 gap-x-8">
																			{groups.groupList.map((item) => (
																				<div
																					key={item.name}
																					className="group relative text-base sm:text-sm"
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
																					<p
																						aria-hidden="true"
																						className="mt-1"
																					>
																						View this school
																					</p>
																				</div>
																			))}
																		</div>
																		<div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
																			{groups.sections.map((section) => (
																				<div key={section.name}>
																					<p
																						id={`${section.name}-heading`}
																						className="font-medium text-gray-900"
																					>
																						{section.name}
																					</p>
																					<ul
																						role="list"
																						aria-labelledby={`${section.name}-heading`}
																						className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
																					>
																						{section.items.map((item) => (
																							<li
																								key={item.name}
																								className="flex"
																							>
																								<a
																									href={item.href}
																									className="hover:text-gray-800"
																								>
																									{item.name}
																								</a>
																							</li>
																						))}
																					</ul>
																				</div>
																			))}
																		</div>
																	</div>
																</div>
															</div>
														</Popover.Panel>
													</Transition>
												</>
											)}
										</Popover>
									))}
								</div>
							</Popover.Group>

							{/* Search */}
							<div className="flex lg:ml-6">
								<a href="#" className="p-2 text-gray-400 hover:text-gray-500">
									<span className="sr-only">Search</span>
									<MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
									{/* on click Icon above, show and focus textfield */}
								</a>
							</div>

							<div className="ml-auto flex items-center">
								<div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
									<a
										href="#"
										className="text-sm font-medium text-gray-700 hover:text-gray-800"
									>
										Sign in
									</a>
									<span className="h-6 w-px bg-gray-200" aria-hidden="true" />
									<a
										href="#"
										className="text-sm font-medium text-gray-700 hover:text-gray-800"
									>
										Create account
									</a>
								</div>
							</div>
						</div>
					</div>
				</nav>
			</header>
		</div>
	);
}
