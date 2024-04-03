import { useCallback, useEffect, useState } from "react";

export const isServer = typeof window === "undefined";

type Props = {
  forIpad?: boolean;
}

const useIsMobile = ({ forIpad = false }: Props) => {
	const [width, setWidth] = useState(!isServer ? window?.innerWidth : undefined);
	const handleWindowSizeChange = useCallback(() => {
		setWidth(window.innerWidth);
	}, []);

	useEffect(() => {
		window.addEventListener("resize", handleWindowSizeChange);
		return () => {
			window.removeEventListener("resize", handleWindowSizeChange);
		};
	}, []);

	return width && width <= 768 + (forIpad ? 400 : 0);
};

export default useIsMobile;