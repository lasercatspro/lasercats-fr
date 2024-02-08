"use client";

import { type ReactNode, useEffect, useState } from "react";
import { Disclosure } from "@headlessui/react";
import {
	Bars3Icon,
	MoonIcon,
	SunIcon,
	XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "./button";

function classNames(...classes: string[]): string {
	return classes.filter(Boolean).join(" ");
}

function ModeToggle(): JSX.Element {
	function disableTransitionsTemporarily(): void {
		document.documentElement.classList.add("[&_*]:!transition-none");
		window.setTimeout(() => {
			document.documentElement.classList.remove("[&_*]:!transition-none");
		}, 0);
	}

	function toggleMode(): void {
		disableTransitionsTemporarily();

		const darkModeMediaQuery = window.matchMedia(
			"(prefers-color-scheme: dark)"
		);
		console.log(darkModeMediaQuery, window.localStorage.isDarkMode);
		const isSystemDarkMode = darkModeMediaQuery.matches;
		const isDarkMode = document.documentElement.classList.toggle("dark");

		if (isDarkMode === isSystemDarkMode) {
			delete window.localStorage.isDarkMode;
		} else {
			window.localStorage.isDarkMode = isDarkMode;
		}
	}

	return (
		<button
			type="button"
			aria-label="Toggle dark mode"
			className="my-auto h-[40px] rounded-full !bg-transparent px-3 py-2 ring-1 transition dark:ring-gray-600 dark:hover:ring-gray-400"
			onClick={toggleMode}
		>
			<SunIcon className="h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-teal-50 [@media(prefers-color-scheme:dark)]:stroke-teal-500 [@media(prefers-color-scheme:dark)]:group-hover:fill-teal-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-teal-600" />
			<MoonIcon className="hidden h-6 w-6 fill-zinc-700 stroke-zinc-500 transition dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400 [@media_not_(prefers-color-scheme:dark)]:fill-teal-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-teal-500" />
		</button>
	);
}

export const Navbar = (): ReactNode => {
	const navigation = [
		{ name: "Expertise", href: "/expertise", current: false },
		{ name: "Projets", href: "/projets", current: false },
		{ name: "Méthodologie", href: "/methode", current: false },
		{ name: "Blog", href: "/blog", current: false },
	];
	const [actualNav, setActualNav] = useState<any>(null);
	const path = usePathname();
	useEffect(() => {
		const actual = navigation.find((n) => n.href === path);
		if (actual != null) {
			setActualNav(actual?.name);
		}
	}, [path]);

	return (
		<Disclosure
			as="nav"
			className="fixed left-0 top-0 z-50 w-full bg-custom-dark dark:border-b-2"
		>
			{({ open }) => (
				<>
					<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
						<div className="flex h-16 justify-between">
							<div className="flex w-full justify-between gap-4">
								<Link className="flex flex-shrink-0 items-center" href={"/"}>
									<img
										className="h-8 w-auto"
										src="/assets/images/svg/logo-green.svg"
										alt="Your Company"
									/>
								</Link>
								<div className="-ml-2 mr-2 flex items-center md:hidden">
									{/* Mobile menu button */}
									<Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
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
													? "bg-white !text-primary"
													: "text-white hover:text-primary"
											} 
                          font-bold' rounded-md px-3 py-2`}
										>
											{item.name}
										</Link>
									))}
									<div className="flex gap-4">
										<Button title="Nous contacter" type="primary" />
										<ModeToggle />
									</div>
								</div>
							</div>
						</div>
					</div>

					<Disclosure.Panel className="md:hidden">
						<div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
							{navigation.map((item) => (
								<Disclosure.Button
									key={item.name}
									as="a"
									href={item.href}
									className={classNames(
										actualNav === item.name
											? "bg-gray-900 text-white"
											: "text-gray-300 hover:bg-gray-700 hover:text-white",
										"block rounded-md px-3 py-2 text-base font-medium"
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
