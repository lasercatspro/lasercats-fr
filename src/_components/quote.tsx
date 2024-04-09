import Image from "next/image";
import { QuoteI } from "../lib/testimonials";
import Link from "next/link";

const Quote = ({ quote }: { quote: QuoteI }) => {
	return (
		<div className="p-8 xl:p-12 mx-8 !border-2 !border-primary !border-opacity-20 rounded-md !bg-custom-blue !bg-opacity-10 hover:bg-opacity-40">
			<Link href={`/projets/${quote.name}`} className="!no-underline flex flex-col gap-4 items-start justify-between min-h-[380px]">
				<div className="">
					<Image
						alt={quote.name}
						src={`/assets/images/logos/${quote.name}.svg`}
						width={300}
						height={100}
						className="h-[50px] mb-6 w-auto flex"
					/>
					<p className="text-xs lg:text-sm leading-4 line-clamp-10 lg:line-clamp-none xl:leading-6 !text-zinc-50">
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
