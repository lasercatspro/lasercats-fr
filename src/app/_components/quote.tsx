import Image from "next/image";
import { QuoteI } from "./blocks/testimonials";

const Quote = ({ quote }: { quote: QuoteI }) => {
	return (
		<div className="p-12 border-2 border-primary border-opacity-10 ">
			<div className="gap-4">
				<Image
					alt={quote.icon}
					src={`/assets/images/logos/${quote.icon}.svg`}
					width={600}
					height={300}
					className="h-[100px] w-full mb-6"
				/>
				<div className="grid grid-cols-1 place-content-between w-[275px] h-[275px] lg:w-[500px] lg:h-[500px]">
					<p className="lg:leading-10 text-sm md:text-inherit line-clamp-[10]">{quote.content}</p>
					<div className="flex items-center">
						<i className="h-12 w-12 rounded-full bg-gray-500" />
						<p className="ml-4">{quote.author}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Quote;
