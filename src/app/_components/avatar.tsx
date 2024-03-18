import { type ReactNode } from "react";

interface Props {
  name?: string
  picture?: string
}

const Avatar = ({ name, picture }: Props): ReactNode => {
	return (
		<div className="flex items-center">
			<img src={picture ?? "/assets/images/svg/logo-green.svg"} className="w-12 h-12 rounded-full mr-4" alt={name} />
			<div className="text-sm font-bold text-zinc-50">par {name ?? "Jane Doe"}</div>
		</div>
	);
};

export default Avatar;
