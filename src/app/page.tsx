import Container from '@/app/_components/container'
import { Intro } from '@/app/_components/intro'
import { type ReactNode } from 'react'

export default function Index (): ReactNode {
  return (
    <main>
      <Container>
        <Intro />
        <h1>Bienvenu</h1>
      </Container>
    </main>
  )
}
