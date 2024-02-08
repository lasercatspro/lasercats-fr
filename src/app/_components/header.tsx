import { type ReactNode } from "react";

const Header = (): ReactNode => {
	return (
		<div className='h-[100vh] flex flex-col justify-center'>
			<div className='h-[50%]' />
			<h1 className="text-xl md:text-6xl font-extrabold tracking-normal mb-20 mt-8 !leading-snug">
				<span className='text-primary mb-12'>Hey ! Nous sommes les Lasercats 👋🏻.</span>
				<br/>
				<span className='pt-12'>Nous fabriquons des applications Webs et mobiles aux petits oignons.</span>
			</h1>
		</div>
	);
};

export default Header;
