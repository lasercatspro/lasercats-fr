"use client"; // Error components must be Client Components

import { useEffect } from "react";
import Container from "../_components/container";
import Image from "next/image";

export default function Error ({
	error,
	reset
}: {
  error: Error & { digest?: string }
  reset: () => void
}): JSX.Element {
	useEffect(() => {
		// Log the error to an error reporting service
		console.error(error);
	}, [error]);

	return (
		<Container classes="min-h-[64vh] pt-32 flex justify-center items-center">
			<div className="flex flex-col gap-8">
				<h2 className="flex gap-1">
				Erreur 5 
					<Image
						alt="logo Lasercats"
						title="Lasercats"
						src={"/assets/images/logos/laser-simple.svg"}
						width={35}
						height={35}
					/>
					<Image
						alt="logo Lasercats"
						title="Lasercats"
						src={"/assets/images/logos/laser-simple.svg"}
						width={35}
						height={35}
					/>
				</h2>
				<p className="text-center">{error.message}</p>
				<button
					className='btn-primary'
					onClick={
					// Attempt to recover by trying to re-render the segment
						() => { reset(); }
					}
				>
        Revenir à la vie normale
				</button>
			</div>
		</Container>
	);
}
