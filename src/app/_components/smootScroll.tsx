"use client";

import { ReactLenis } from "@studio-freight/react-lenis";
import { ReactNode } from "react";

function SmoothScrolling({ children }: { children: ReactNode}) {
	return (
		<ReactLenis root options={{ lerp: 0.05, duration: 1.05 }}>
			{children}
		</ReactLenis>
	);
}

export default SmoothScrolling;
