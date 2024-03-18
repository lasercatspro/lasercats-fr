import dynamic from "next/dynamic";
import { type ReactNode } from "react";
import Link from "next/link";

// Import dynamique de ThreeLasercats pour le rendu côté client
const ThreeLasercats = dynamic(() => import("./three-lasercats"), {
	ssr: false,
});

const Header = (): ReactNode => {
	return (
		<div className="h-[100vh] flex flex-col justify-center relative bg-black">
			<ThreeLasercats />
			<div className="mx-4 md:mx-16 font-extrabold !leading-snug absolute z-20 mt-[25vh]">
				<h1 className='text-primary text-xl md:text-6xl'>
					Hey ! Nous sommes les Lasercats 👋🏻
				</h1> 
				<span className='pt-12 text-xl md:text-6xl'>Nous fabriquons des applications Webs <br /> et mobiles aux petits oignons.</span>
				<div className="mt-24">
					<p className="mb-8">Besoin ponctuel ou projet de long terme ?</p>
					<Link className="primary w-[200px] hover:!no-underline" href={"#contact"}>Nous contacter</Link>
				</div>
			</div>
			
		</div>
	);
};

export default Header;
