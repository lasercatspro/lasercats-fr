import Image from "next/image";
import { type ReactNode } from "react";

interface Props {
  name?: string;
  picture?: string;
}

const Avatar = ({ name, picture }: Props): ReactNode => {
	return (
		<div className="flex items-center">
			<Image
				alt={name ?? "Logo lasercats"}
				title={name}
				src={picture ?? "/assets/images/logos/laser-green.svg"}
				className="w-12 h-12 rounded-full mr-4"
				width={100}
				height={100}
			/>
			<div className="text-sm font-bold">par {name ?? "Lasercats"}</div>
		</div>
	);
};

export default Avatar;
