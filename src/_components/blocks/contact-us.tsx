import Link from "next/link";
import Container from "../container";

const ContactUs = () => {
	return (
		<div className="flex justify-center items-center py-40 bg-custom-dark border-t-2 border-primary">
			<Container>
				<div className="text-center leading-snug">
					<p className="!text-5xl text-zinc-50 lg:!text-[6rem]">
            Nous écrire à{" "}
					</p>
					<br />
					<Link
						className="mt-8 text-primary !text-4xl lg:!text-[6rem] hover:!underline"
						href="mailto:contact@lasercats.fr"
					>
            contact@lasercats.fr
					</Link>
				</div>
			</Container>
		</div>
	);
};

export default ContactUs;
