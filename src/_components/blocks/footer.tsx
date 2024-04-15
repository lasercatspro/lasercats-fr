import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import { type ReactNode } from "react";
import Container from "../container";
import { EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline";

export function Footer(): ReactNode {
	return (
		<footer className="bg-custom-dark p-8 pb-16 border-t-2 border-primary">
			<Container classes="relative">
				<ul className="flex flex-col lg:flex-row gap-8 items-center">
					<div className="flex flex-col gap-1 items-start lg:w-full">
						<Link
							href={
								"https://www.openstreetmap.org/search?query=2%20avenue%20jean%20janvier%2C%2035000%20rennes#map=19/48.10732/-1.67362"
							}
							className="flex justify-start items-center gap-4 group hover:no-underline"
							target="_blank"
						>
							<MapPinIcon className="h-4 w-4 lg:h-8 lg:w-8 text-zinc-50 group-hover:text-primary" />
							<div className="flex flex-col w-full">
								<li className="text-lg lg:text-xl text-zinc-50 group-hover:text-primary">
                  2 avenue Jean Janvier
								</li>
								<li className="text-lg lg:text-xl text-zinc-50 group-hover:text-primary">
                  35000 RENNES
								</li>
							</div>
						</Link>
						<Link
							className="flex lg:hidden justify-start items-center gap-4 text-zinc-50"
							href="mailto:contact@lasercats.fr"
						>
							<EnvelopeIcon className="h-4 w-4 lg:h-8 lg:w-8" />
							<li className="text-lg lg:text-xl text-zinc-50">
                contact@lasercats.fr
							</li>
						</Link>
					</div>
					<div className="flex flex-col gap-8 justify-center items-center lg:items-start w-[80vw] lg:w-full">
						<Image
							alt="logo Lasercats"
							title="Lasercats"
							src={"/assets/images/logos/laser-simple.svg"}
							width={200}
							height={200}
						/>
						<div className="flex flex-col lg:flex-row justify-center items-center gap-4">
							<p className="text-zinc-50 text-sm">
                ©{dayjs().format("YYYY")} - By Lasercats
							</p>

							<div className="flex gap-4 rounded-md items-end">
								{/* Linkedin Link */}
								<Link
									href="https://www.linkedin.com/company/lasercats/about/"
									target="_blank"
								>
									<svg
										className="h-6 w-6 fill-primary hover:fill-zinc-50"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 448 512"
									>
										<path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
									</svg>
								</Link>
								{/* Twitter Link */}
								<Link href="https://twitter.com/LasercatsDev/" target="_blank">
									<svg
										className="h-6 w-6 fill-primary hover:fill-zinc-50"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 512 512"
									>
										<path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
									</svg>
								</Link>
								{/* Github link */}
								<Link
									href="https://github.com/orgs/lasercatspro/"
									target="_blank"
								>
									<svg
										className="h-6 w-6 fill-primary hover:fill-zinc-50"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 496 512"
									>
										<path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
									</svg>
								</Link>
							</div>
						</div>
					</div>
					<Link
						className="hidden lg:flex justify-start gap-4 group text-zinc-50"
						href="mailto:contact@lasercats.fr"
					>
						<EnvelopeIcon className="h-4 w-4 lg:h-8 lg:w-8 group-hover:text-primary" />
						<li className="text-lg lg:text-xl text-zinc-50 group-hover:text-primary">
              contact@lasercats.fr
						</li>
					</Link>
				</ul>
			</Container>
		</footer>
	);
}

export default Footer;
