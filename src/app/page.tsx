import Container from "@/app/_components/container";
import { type ReactNode } from "react";
import Header from "./_components/header";

export default function Index (): ReactNode {
	return (
		<main>
			<Container>
				<Header />
			</Container>
		</main>
	);
}
