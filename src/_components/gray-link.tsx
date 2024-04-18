import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

type Props = {
  title: string
  isWhite?: boolean
	type?: "previous" | "next"
}

const GrayLink = ({ title, isWhite = false, type = "next" }: Props) => {
	return <div className="group">
		<button className={`pr-2 pb-2 flex gap-2 justify-center items-center border-b ${isWhite ? "border-b-zinc-50" : "border-b-zinc-500"} group-hover:!border-primary`}>
			{type === "previous" && <ArrowLeftIcon className={`h-4 w-4 lg:h-6 lg:w-6 ${isWhite ? "text-zinc-50" : "text-zinc-500"} group-hover:!text-primary`} />}
			<p className={`!text-sm lg:text-inherit ${isWhite ? "!text-zinc-50" : "!text-zinc-500"} group-hover:!text-primary`}>{title}</p>
			{type === "next" && <ArrowRightIcon className={`h-4 w-4 lg:h-6 lg:w-6 ${isWhite ? "text-zinc-50" : "text-zinc-500"} group-hover:!text-primary`} />}
		</button>
	</div>;
};

export default GrayLink;