import Footer from "@/app/_components/blocks/footer";
import { HOME_OG_IMAGE_URL } from "@/lib/constants";
import type { Metadata } from "next";

import "./globals.css";
import Navbar from "./_components/blocks/navbar";
import { Suspense, type ReactNode } from "react";

export const metadata: Metadata = {
	title: "Lasercats - Agence de développeurs pour des solutions web",
	description:
    "Lasercats - Une agence rennaise de développeurs qui vous aide à fabriquer des applications web et mobiles.",

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
				<link
					href="https://fonts.googleapis.com/css2?family=Satisfy&display=swap"
					rel="stylesheet"
				/>
			</head>
			<body className="gradient w-full">
				<Navbar />
				<div className="mx-auto">
					<Suspense fallback={null}>
						{children}
					</Suspense>
				</div>
				<Footer />
			</body>
		</html>
	);
}
