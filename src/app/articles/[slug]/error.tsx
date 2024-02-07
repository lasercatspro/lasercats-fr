'use client' // Error components must be Client Components

import Link from 'next/link'
import { useEffect } from 'react'

export default function Error ({
  error,
  reset
}: {
  error: Error & { digest?: string }
  reset: () => void
}): JSX.Element {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className='flex flex-col'>
      <h2>Something went wrong!</h2>
      {error.message}
      <Link className='btn-primary' href={'/articles'}>Retourner aux articles</Link>
    </div>
  )
}
