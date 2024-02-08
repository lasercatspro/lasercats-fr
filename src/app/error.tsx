"use client"; // Error components must be Client Components

import { useEffect } from "react";
import Container from "./_components/container";

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
		<Container>
			<h2>Something went wrong!</h2>
			{error.message}
			<button
				className='btn-primary'
				onClick={
					// Attempt to recover by trying to re-render the segment
					() => { reset(); }
				}
			>
        Try again
			</button>
		</Container>
	);
}
