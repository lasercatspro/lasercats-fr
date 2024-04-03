import { ArrowRightIcon } from "@heroicons/react/24/outline";

type Props = {
  title: string
  isWhite?: boolean
}

const GrayLink = ({ title, isWhite = false }: Props) => {
	return <button className={`pr-2 pb-2 flex gap-2 items-center border-b ${isWhite ? "border-b-zinc-50" : "border-b-zinc-500"}`}>
		<p className={`!text-sm lg:text-inherit ${isWhite ? "!text-zinc-50" : "!text-zinc-500"}`}>{title}</p>
		<ArrowRightIcon className={`h-4 w-4 lg:h-6 lg:w-6 ${isWhite ? "text-zinc-50" : "text-zinc-500"}`} />
	</button>;
};

export default GrayLink;