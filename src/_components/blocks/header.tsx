import dynamic from "next/dynamic";
import { type ReactNode } from "react";
import Link from "next/link";
import SpecialButton from "../special-button";
import Numbers from "../../_components/blocks/numbers";

// Import dynamique de ThreeLasercats pour le rendu côté client
const ThreeLasercats = dynamic(() => import("./three-lasercats"), {
	ssr: false,
});

const Header = (): ReactNode => {
	return (
		<header className=" flex flex-col justify-start bg-custom-dark relative">
			<div className="absolute h-full w-full">
				<ThreeLasercats />
			</div>
			<div className="z-20 mx-6 lg:max-w-7xl xl:mx-auto inset-0" >
				<div className=" h-[100vh] flex items-center">
					<div className="font-normal mt-[10vh] lg:mt-[25vh]">
						<h1 className='text-primary !leading-snug'>
							Hey,
							<br />
							Nous sommes les Lasercats.
						</h1>
						<span className='pt-12 text-[2.25rem] md:text-[3.25rem] text-zinc-50 !leading-snug'>Nous fabriquons des applications Web  et mobile aux petits oignons.</span>
						<div className="mt-24">
							<p className="mb-8 text-zinc-50 opacity-50 z-30">Besoin ponctuel ou projet de long terme ?</p>
							<Link href={"/contact"} className="hidden lg:block">
								<SpecialButton title="Nous contacter" />
							</Link>
							<Link href={"/contact"} className="lg:hidden primary h-6 rounded-sm !w-[180px]">
								Nous contacter
							</Link>
						</div>

					</div>

				</div >
				<div className="mt-12 mb-24 lg:mt-24 lg:mb-36">
					<Numbers />
				</div>
			</div>

		</header >
	);
};

export default Header;
