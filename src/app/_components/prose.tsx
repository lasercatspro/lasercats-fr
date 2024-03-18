import clsx from "clsx";
import { type ReactNode } from "react";

export function Prose ({ children, className }: { children: ReactNode, className: string }): ReactNode {
	return (
		<div className={clsx(className, "prose", "w-full")}>{children}</div>
	);
}
