import Head from 'next/head'
import { Inter } from '@next/font/google'

import Button from '../components/atoms/Button'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  function nextStep () {
    console.log('event click button')
  }

  return (
    <>
      <Head>
        <title>Centro Pokémon</title>
        <meta name="description" content="Cuidamos bem do seu pokémon, para ele cuidar bem de você" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={inter.className}>
        <Button textLabel="Concluir Agendamento" onClickEvent={nextStep} />
      </main>
    </>
  )
}
