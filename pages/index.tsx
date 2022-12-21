import Head from 'next/head'
import { Inter } from '@next/font/google'

import Step from '@/components/molecules/Step'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
      <Head>
        <title>Centro Pokémon</title>
        <meta name="description" content="Cuidamos bem do seu pokémon, para ele cuidar bem de você" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={inter.className}>
        <Step actualStepName='Quem Somos' title='Quem Somos' slogan='A maior rede de tratamento pokémon.' router='about' />
      </main>
    </>
  )
}
