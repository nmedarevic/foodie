import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useEffect } from 'react'
import client from '../service/apollo-client'
import { gql, useQuery } from "@apollo/client";
const query = gql`{
  plans {
    name
    id
    pricePerMeal
    itemImage
  }
}
`
export default function Home() {
  const {data, loading, error} = useQuery(query)

  return (
    <div className={`leading-normal tracking-normal text-white  h-screen ${styles.gradient}`} style={{'font-family': "'Source Sans Pro', sans-serif;"}}>
      <nav id="header" className="fixed w-full z-30 top-0 text-white">
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
          <div className="pl-4 flex items-center">
            <a className="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="#">
              FOODIE
            </a>
          </div>
        </div>
        <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
      </nav>
      <div className="pt-24">
      <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
          <h1 className="my-4 text-5xl font-bold leading-tight">
            Are you hungry?
          </h1>
          <p className="leading-normal text-2xl mb-8">
            You've come to the right place! Click here to start!
          </p>
          <button className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
            <Link href="/select-plan">
              <a>Subscribe</a>
            </Link>
          </button>
        </div>
      </div>
    </div>
    </div>
  )
}
