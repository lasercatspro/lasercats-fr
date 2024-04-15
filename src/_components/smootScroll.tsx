"use client";

import { ReactLenis } from "@studio-freight/react-lenis";
import Tempus from "@studio-freight/tempus";
import { ReactNode, useCallback, useEffect, useRef } from "react";

function SmoothScrolling({ children }: { children: ReactNode}) {
	const lenisRef = useRef<any>(null);
  
	const update = useCallback(() => {
		if (lenisRef?.current) {
			Tempus.add((time: any) => {
				lenisRef.current?.lenis?.raf(time);
			}, 1);
		}
	}, []);

	useEffect(() => {
		update();

		return () => {
			Tempus.remove(update);
		};
	}, [update]);

	return (
		<ReactLenis ref={lenisRef} root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }} autoRaf={false}>
			{children}
		</ReactLenis>
	);
}

export default SmoothScrolling;
