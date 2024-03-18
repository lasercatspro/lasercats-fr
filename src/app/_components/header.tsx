import dynamic from "next/dynamic";
import { type ReactNode } from "react";

// Import dynamique de ThreeLasercats pour le rendu côté client
const ThreeLasercats = dynamic(() => import("./three-lasercats"), {
	ssr: false,
});

const Header = (): ReactNode => {
	return (
		<div className="h-[100vh] flex flex-col justify-center relative bg-black">
			<ThreeLasercats />
			<h1 className="mx-4 md:mx-16 font-extrabold tracking-normal mb-20 mt-8 !leading-snug absolute z-20">
				<span className='text-primary mb-12'>Hey ! Nous sommes les Lasercats 👋🏻.</span>
				<br/>
				<span className='pt-12'>Nous fabriquons des applications Webs et mobiles aux petits oignons.</span>
			</h1>
		</div>
	);
};

export default Header;
