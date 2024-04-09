"use client";

import { type ReactNode, useEffect, useState } from "react";
import { Disclosure } from "@headlessui/react";
import {
	Bars3Icon,
	XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";

function classNames(...classes: string[]): string {
	return classes.filter(Boolean).join(" ");
}

export const Navbar = (): ReactNode => {
	const navigation = [
		{ name: "Expertise", href: "/expertise", current: false },
		{ name: "Projets", href: "/projets", current: false },
		{ name: "Blog", href: "/blog", current: false },
	];
	const [actualNav, setActualNav] = useState<any>(null);
	const path = usePathname();
	useEffect(() => {
		const actual = navigation.find((n) => n.href === path);
		actual != null ? setActualNav(actual?.name) : setActualNav(null);
	}, [path]);

	return (
		<Disclosure
			as="nav"
			className="fixed left-0 top-0 z-50 w-full bg-custom-dark bg-opacity-90 backdrop-blur-sm border-b border-b-custom-dark"
		>
			{({ open }) => (
				<>
					<div className="mx-4 lg:mx-16">
						<div className="flex h-16 justify-between relative">
							<div className="flex w-full justify-between items-center">
								<Link className="flex flex-shrink-0 items-center" href={"/"}>
									<img
										className="h-8 w-auto"
										src="/assets/images/logos/laser-green.svg"
										alt="Your Company"
									/>
								</Link>
								<Link href={"#contact"} className="md:hidden primary h-6 rounded-sm hover:no-underline">
									Nous contacter
								</Link>
								<div className="-ml-2 mr-2 flex items-center md:hidden">
									{/* Mobile menu button */}
									<Disclosure.Button className="relative inline-flex items-center justify-center rounded-sm p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
										<span className="absolute -inset-0.5" />
										<span className="sr-only">Open main menu</span>
										{open ? (
											<XMarkIcon className="block h-6 w-6" aria-hidden="true" />
										) : (
											<Bars3Icon className="block h-6 w-6" aria-hidden="true" />
										)}
									</Disclosure.Button>
								</div>
								<div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
									{navigation.map((item) => (
										<Link
											key={item.name}
											href={item.href}
											className={`${
												actualNav === item.name
													? " !text-primary !font-extrabold"
													: "text-zinc-50 hover:text-primary "
											} 
                          font-bold px-3 py-2 hover:no-underline `}
										>
											{item.name}
										</Link>
									))}
									<div className="flex gap-4">
										<Link href={"/#contact"} className="primary h-6 rounded-sm !text-custom-dark hover:no-underline hover:!text-primary">
											Nous contacter
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>

					<Disclosure.Panel className="md:hidden relative">
						<div className="space-y-1 px-2 pb-3 pt-2 sm:px-3 w-2/3">
							{navigation.map((item) => (
								<Disclosure.Button
									key={item.name}
									as="a"
									href={item.href}
									className={classNames(
										actualNav === item.name
											? "bg-gray-900 text-white"
											: "text-gray-300 hover:bg-gray-700 hover:text-white",
										"block rounded-sm px-3 py-2 text-base font-medium"
									)}
								>
									{item.name}
								</Disclosure.Button>
							))}
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
};

export default Navbar;
