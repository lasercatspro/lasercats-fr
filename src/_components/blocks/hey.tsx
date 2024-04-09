import Link from "next/link";
import Container from "../container";

const Hey = () => {
	return (
		<div className="flex justify-center items-center h-[50vh] bg-custom-dark border-t-2 border-primary">
			<Container>
				<div className="text-center leading-snug">
					<p className="!text-5xl text-zinc-50 md:!text-[6rem]">Nous écrire à </p> 
					<br />
					<Link
						className="mt-8 text-primary !text-4xl md:!text-[6rem]"
						href="mailto:contact@lasercats.fr"
					>
          contact@lasercats.fr
					</Link>
				</div>
			</Container>
		</div>
	);
};

export default Hey;
