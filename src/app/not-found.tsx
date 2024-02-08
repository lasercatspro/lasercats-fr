"use client";

import Link from "next/link";
import { type ReactNode } from "react";
import Container from "./_components/container";

export default function NotFound (): ReactNode {
	return (
		<Container classes="max-w-7xl mx-auto">
			<div className='flex flex-col p-10 justify-center items-center gap-4'>
				<h1>Erreur 404 😥</h1>
				<p>{"La page que vous recherchez n'existe pas."}</p>
				<Link className="btn-primary" href="/">
          Return Home
				</Link>
			</div>
		</Container>
	);
}
