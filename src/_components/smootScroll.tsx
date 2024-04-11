"use client";

import { ReactLenis } from "@studio-freight/react-lenis";
import { ReactNode, useEffect, useRef } from "react";
import gsap from "gsap";

function SmoothScrolling({ children }: { children: ReactNode}) {
	const lenisRef = useRef<any>(null);
  
	useEffect(() => {
		function update(time: any) {
			if (lenisRef?.current) return lenisRef.current?.lenis?.raf(time * 1000);
		}
  
		gsap.ticker.add(update);
  
		return () => {
			gsap.ticker.remove(update);
		};
	});
	return (
		<ReactLenis ref={lenisRef} root options={{ lerp: 0.1, duration: 1.5, syncTouch: true }} autoRaf={false}>
			{children}
		</ReactLenis>
	);
}

export default SmoothScrolling;
