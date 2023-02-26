import Head from 'next/head'
import Home from '../templates/home'

import client from '../graphql/client'
import { GET_PROJECTS } from '../graphql/queries'

import ButtonMenu from "../components/ButtonMenu"
import WrapperMenu from "../components/WrapperMenu"
import Greeting from "../components/Greeting"
import About from "../components/About"
import Projects from "../components/Projects"
import Contact from "../components/Contact"


export default function index({ projects }) {
  return (
    <>
      <Head>
        <title>Letícia Oliveira - Portfólio</title>
      </Head>

      <Home>

        <ButtonMenu />

        <WrapperMenu />

        <Greeting />

        <About />

        <Projects projects={projects} />

        <Contact />

      </Home>
    </>
  )
}

export const getStaticProps = async () => {
  const { projects } = await client.request(GET_PROJECTS, {})

  if (!projects) return { notFound: true }

  return {
    revalidate: 5,
    props: {
      projects
    }
  }
}