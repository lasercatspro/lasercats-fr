import dynamic from "next/dynamic";
import { type ReactNode } from "react";
import Link from "next/link";

// Import dynamique de ThreeLasercats pour le rendu côté client
const ThreeLasercats = dynamic(() => import("./three-lasercats"), {
	ssr: false,
});

const Header = (): ReactNode => {
	return (
		<div className="h-[100vh] flex flex-col justify-center bg-custom-dark relative">
			<ThreeLasercats />
			<div className="mx-6 lg:max-w-7xl lg:mx-auto absolute inset-0 z-30 flex items-center">
				<div className="font-extrabold absolute z-20 mt-[25vh]">
					<h1 className='text-primary text-xl md:text-6xl !leading-snug'>
					Hey, 
						<br />
					Nous sommes les Lasercats.
					</h1> 
					<span className='pt-12 text-xl md:text-6xl text-zinc-50 !leading-snug'>Nous fabriquons des applications Web  et mobile aux petits oignons.</span>
					<div className="mt-24">
						<p className="mb-8 text-zinc-50">Besoin ponctuel ou projet de long terme ?</p>
						<Link className="primary w-[200px] hover:!no-underline !text-custom-dark hover:!text-primary" href={"/contact"}>Nous contacter</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
