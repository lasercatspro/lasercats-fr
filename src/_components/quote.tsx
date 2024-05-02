import Image from "next/image";
import { QuoteI } from "../lib/testimonials";

const Quote = ({ quote }: { quote: QuoteI }) => {
	return (
		<div className="p-8 xl:p-8 mx-2 !border !border-zinc-50 !border-opacity-20 rounded-md bg-gradient-to-t from-custom-dark to-[#0d0a17] to-60%">
			{/* Removes links that point to customer pages  */}
			{/* <Link href={`/projets/${quote.name}`} className="!no-underline flex flex-col gap-4 items-start justify-between h-[370px] md:min-h-[410px]"> */}
			<div className="!no-underline flex flex-col gap-4 items-start justify-between h-[370px] md:min-h-[410px]">
				<div className="">
					<Image
						alt={`Logo ${quote.name}`}
						title={quote.name}
						src={`/assets/images/logos/${quote.name}.svg`}
						width={300}
						height={100}
						className="mb-6 h-[2rem] w-[4rem] lg:h-[4rem] lg:w-[8rem]"
					/>
					<p className="text-xs lg:text-sm leading-4 lg:line-clamp-none xl:leading-6 !text-zinc-50 !text-opacity-80">
						{quote.content}
					</p>
				</div>
				<div className="flex items-center gap-2 ">
					<i className="h-12 w-12 rounded-full bg-gray-500" />
					<div>
						<p className="ml-4 text-zinc-100 text-xs lg:text-base">{quote.author}</p>
						<p className="ml-4 text-zinc-400 text-xs lg:text-sm">{quote.authorStatus}</p>
					</div>
				</div>
			</div>
			{/* </Link> */}
		</div>
	);
};

export default Quote;
