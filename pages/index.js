import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const HomePage = () => {


  return (
    <div>
      <center className='pt-4'>
        <h1 className=' text-5xl text-yellow-500 font-extrabold'> Welcome to pokemon universe</h1>
      </center>
      <div className=' h-10'>
        <ul className='flex space-x-8 text-white justify-center mr-10 pt-2 text-xl'>
          <li className='hover:text-yellow-500'>
            <Link href='/'>
              <a>Home</a>
            </Link>
          </li>
          <li className='hover:text-yellow-500'>
            <Link href='/characterDetails'>
              <a>Characters</a>
            </Link>
          </li>
          <li className='hover:text-yellow-500'>
            <Link href='/comics'>
              Comics
            </Link>
          </li>
          <li className='hover:text-yellow-500'>
            <Link href='/creator'>
              creator
            </Link>
          </li>
          <li className='hover:text-yellow-500'>
            <Link href='/series'>
              Series
            </Link>
          </li>
        </ul>
        <div className=' flex justify-center ml-9'>

          <Image src='https://assets.pokemon.com/assets/cms2/img/pokedex/full/026.png'
            alt=""
            height={450}
            width={450} />
        </div>
      </div>
    </div>

  )
}

export default HomePage
