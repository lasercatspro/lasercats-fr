import dynamic from "next/dynamic";
import { type ReactNode } from "react";
import Link from "next/link";
import SpecialButton from "../special-button";

// Import dynamique de ThreeLasercats pour le rendu côté client
const ThreeLasercats = dynamic(() => import("./three-lasercats"), {
	ssr: false,
});

const Header = (): ReactNode => {
	return (
		<header className="h-[100vh] flex flex-col justify-center bg-custom-dark relative">
			<div className="absolute lg:hidden inset-0 h-full w-full bg-zinc-500 z-30 bg-opacity-10" />
			<ThreeLasercats />
			<div className="mx-6 lg:max-w-7xl xl:mx-auto absolute inset-0 z-30 flex items-center">
				<div className="absolute z-20 mt-[10vh] lg:mt-[25vh] font-normal">
					<h1 className='text-primary !leading-snug'>
						Hey,
						<br />
						Nous sommes les Lasercats.
					</h1>
					<span className='pt-12 text-[2.25rem] md:text-[3.25rem] text-zinc-50 !leading-snug'>Nous fabriquons des applications Web  et mobile aux petits oignons.</span>
					<div className="mt-24">
						<p className="mb-8 text-zinc-50 opacity-50">Besoin ponctuel ou projet de long terme ?</p>
						<Link href={"/contact"} className="hidden lg:block">
							<SpecialButton title="Nous contacter" /> 
						</Link>
						<Link href={"/contact"} className="lg:hidden primary h-6 rounded-sm !w-[180px]">
							Nous contacter
						</Link>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
