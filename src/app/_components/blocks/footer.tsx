import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import { type ReactNode } from "react";

export function Footer(): ReactNode {
	return (
		<footer className="p-12 lg:p-24 lg:h-[450px]  mx-auto flex justify-end">
			<ul className="grid grid-cols-1 gap-12 lg:grid-cols-4 items-end justify-around w-full">
				<div className="flex flex-col gap-4">
					<Image alt="logo Lasercats" src={"/assets/images/svg/logo-green.svg"} width={100} height={100}/>
					<p>©{dayjs().format("YYYY")} - Lasercats</p>
				</div>
				<div className="flex gap-8 relative">
					<li className="flex flex-col gap-y-4">
						<h3 className="text-lg">Bureaux</h3>
						<span>2 avenue Jean Janvier <br /> 35000 RENNES</span>
					</li>
					{/* <hr className="hidden lg:block h-[2px] w-[4rem] bg-white transform rotate-90"/> */}
					<li className="flex flex-col gap-y-4">
						<h3 className="text-lg">Contact</h3>
						<div>
							<span>+330234567890</span>
							<br />
							<a href="mailto:contact@lasercats.fr">contact@lasercats.fr</a>
						</div>
					</li>
				</div>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-center relative">
					<hr className="lg:block absolute -top-6 left-0 lg:-left-28 lg:top-10 h-[1px] w-full lg:h-[1px] lg:w-[8rem] bg-white lg:transform lg:rotate-90"/>

					<li><Link href={"/"}>Lasercats.Fr</Link></li>
					<li><Link href={"/blog"}>Blog</Link></li>
					<li><Link href={"/expertise"}>Expertise</Link></li>
					<li><Link href={"/methode"}>Notre méthode</Link></li>
					<li><Link href={"/projets"}>Nos projets</Link></li>
				</div>
				<li className="flex lg:justify-end">
					<p className="hidden">Réseaux sociaux</p>
					<div className="flex gap-4 rounded-md items-end">
						{/* Linkedin Link */}
						<Link href="https://www.linkedin.com/company/lasercats/about/" target="_blank">
							<svg
								className="h-10 w-10 fill-primary"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 448 512"
							>
								<path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
							</svg>
						</Link>
						{/* Twitter Link */}
						<Link href="https://twitter.com/LasercatsDev/" target="_blank">
							<svg
								className="h-10 w-10 fill-primary"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 512 512"
							>
								<path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
							</svg>
						</Link>
						{/* Github link */}
						<Link href="https://github.com/orgs/lasercatspro/" target="_blank">
							<svg
								className="h-10 w-10 fill-primary"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 496 512"
							>
								<path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
							</svg>
						</Link>
					</div>
				</li>
			</ul>
		</footer>
	);
}

export default Footer;
