import clsx from "clsx";
import { type ReactNode } from "react";

export function Prose ({ children, className }: { children: ReactNode, className: string }): ReactNode {
	return (
		<div className={clsx(className, "prose dark:prose-invert", "w-full")}>{children}</div>
	);
}
