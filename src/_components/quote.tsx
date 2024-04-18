import Image from "next/image";
import { QuoteI } from "../lib/testimonials";
import Link from "next/link";

const Quote = ({ quote }: { quote: QuoteI }) => {
	return (
		<div className="p-8 xl:p-12 mx-2 !border !border-zinc-50 !border-opacity-20 rounded-md bg-gradient-to-t from-custom-dark to-[#141124] to-60% hover:!border-opacity-60">
			<Link href={`/projets/${quote.name}`} className="!no-underline flex flex-col gap-4 items-start justify-between min-h-[410px]">
				<div className="">
					<Image
						alt={`Logo ${quote.name}`}
						title={quote.name}
						src={`/assets/images/logos/${quote.name}.svg`}
						width={300}
						height={100}
						className="mb-6 h-[4rem] w-[8rem]"
					/>
					<p className="text-xs lg:text-sm leading-4 lg:line-clamp-none xl:leading-6 !text-zinc-50">
						{quote.content}
					</p>
				</div>
				<div className="flex items-center gap-2 ">
					<i className="h-12 w-12 rounded-full bg-gray-500" />
					<p className="ml-4 text-zinc-50 text-xs lg:text-base">{quote.author}</p>
				</div>
			</Link>
		</div>
	);
};

export default Quote;
