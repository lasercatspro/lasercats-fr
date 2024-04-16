import Footer from "@/_components/blocks/footer";
import { HOME_OG_IMAGE_URL } from "../lib/constants";
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../_components/blocks/navbar";
import { Suspense, type ReactNode } from "react";
import SmoothScrolling from "../_components/smootScroll";

export const metadata: Metadata = {
	metadataBase: new URL((process.env.ROOT_URL as string)),
	title: "Lasercats - Agence de développeurs pour des solutions web",
	description:
    "Lasercats - Une agence rennaise de développeurs qui vous aide à fabriquer des applications web et mobiles.",
	alternates: {
		canonical: `${process.env.ROOT_URL}`,
	},
	openGraph: {
		images: `${process.env.ROOT_URL}${HOME_OG_IMAGE_URL}`,
	},
};

export default function RootLayout({
	children,
}: Readonly<{
  children: React.ReactNode;
}>): ReactNode {
	return (
		<html lang="fr">
			<head>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/favicon/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon/favicon-16x16.png"
				/>
				<link rel="manifest" href="/favicon/site.webmanifest" />
				<link
					rel="mask-icon"
					href="/favicon/safari-pinned-tab.svg"
					color="#000000"
				/>
				<link rel="shortcut icon" href="/favicon/favicon.ico" />
				<meta name="msapplication-TileColor" content="#000000" />
				<meta
					name="msapplication-config"
					content="/favicon/browserconfig.xml"
				/>
				<meta name="theme-color" content="#000" />
				<link rel="alternate" type="application/rss+xml" href="/feed.xml" />
				<script defer data-domain="lasercats.fr" src="https://plausible.io/js/script.js" />
			</head>
			{/*  */}
			<body className="min-h-[100vh] overflow-x-hidden bg-cover bg-center bg-[url('/assets/images/backgrounds/bg-3.jpg')]">
				<SmoothScrolling>
					<Navbar />
					<Suspense fallback={null}>
						<main>
							{children}
						</main>
					</Suspense>
					<Footer />
				</SmoothScrolling>
			</body>
		</html>
	);
}
