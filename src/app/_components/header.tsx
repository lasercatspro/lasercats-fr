"use client";
import { useState, type ReactNode, useEffect } from "react";
import dynamic from "next/dynamic";
import { useProgress } from "@react-three/drei";

const ThreeLasercats = dynamic(() => import("./three-lasercats"), { ssr: false });

const Header = (): ReactNode => {
	const { progress } = useProgress();
	const [loading, setIsLoading] = useState<boolean>(true);
	useEffect(() => {
		setIsLoading(progress < 100);
	}, [progress]);
	return (
		<div className={`h-[100vh] flex flex-col justify-center relative ${loading && "bg-black"}`}>
			<ThreeLasercats loading={loading} progress={progress} />
			<h1 className="mx-4 md:mx-16 text-xl md:text-6xl font-extrabold tracking-normal mb-20 mt-8 !leading-snug absolute z-30" style={{ opacity: loading ? 0 : 1 }}>
				<span className='text-primary mb-12'>Hey ! Nous sommes les Lasercats 👋🏻.</span>
				<br/>
				<span className='pt-12'>Nous fabriquons des applications Webs et mobiles aux petits oignons.</span>
			</h1>
		</div>
	);
};

export default Header;
