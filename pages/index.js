import Head from 'next/head'
import Component_adder from './component_adder'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Component Collection</title>
      </Head>
      <Component_adder/>
    </div>
  )
}
