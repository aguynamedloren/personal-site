import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center text-black">
      <Head>
        <title>Loren Burton, Software Engineer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-green flex justify-center w-full mt-1'>
        <div className='flex w-full max-w-4xl pt-20'>

          <div className='w-3/6'>
            <h1 className='text-5xl font-serif mt-7 leading-tight'>
              Loren Burton,<br/>
              Software Engineer
            </h1>

            <p className='mt-10 pr-16 font-light leading-7'>
              With over a decade of experience building and growing software 
              startups from the ground up, I have a proven track record developing 
              across the tech stack, establishing engineering best practices, and 
              working with non-technical leaders to execute on business 
              requirements.
            </p>

            <div className='mt-14'>
              <a 
                href='mailto:lorendburton@gmail.com' 
                target='_blank'
                className='rounded-full bg-green border-black border-2 py-2 px-8 items-center'>
                <span className='font-medium'>Email Me</span>
              </a>
            </div>
          </div>

          <div className='w-3/6 m-0 p-0'>
            <Image 
              src="/profile-photo.png" 
              alt="Profile photo" 
              width={445} 
              height={534} 
              layout='responsive'
            />
          </div>
    
        </div>
      </main>
    </div>
  )
}

export default Home
