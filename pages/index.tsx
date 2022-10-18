import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/future/image'

const emailUrl = 'mailto:lorendburton@gmail.com'
const linkedInUrl = 'https://www.linkedin.com/in/aguynamedloren/'
const githubUrl = 'https://github.com/aguynamedloren'
const stackoverflowUrl = 'https://stackoverflow.com/users/524659/aguynamedloren'

const Home: NextPage = () => {
  return (
    <div className='flex flex-col text-black h-screen'>
      <Head>
        <title>Loren Burton, Software Engineer</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='lg:hidden border-4 border-green rounded-full ml-4 mt-4 absolute'>
        <Image
          className='rounded-full'
          src='/profile-photo-sm.jpg'
          alt='Profile photo'
          width={100}
          height={100}
        />

      </div>

      <main className='flex bg-green justify-center w-full px-4 pt-16 mt-16 lg:mt-1 lg:h-[60%] lg:min-h-[600px]'>
        <div className='flex w-full max-w-4xl'>
          <div className='w-full lg:w-3/6 mt-auto mb-20'>
            <h1 className='text-4xl lg:text-5xl font-serif mt-7 leading-tight'>
              Loren Burton,<br />
              Software Engineer
            </h1>

            <p className='mt-10 pr-0 lg:pr-16 font-light leading-7'>
              With over a decade of experience building and growing software
              startups from the ground up, I have a proven track record developing
              across the tech stack, establishing engineering best practices, and
              working with non-technical leaders to execute on business
              requirements.
            </p>

            <div className='mt-14 flex gap-3'>
              <a
                href={emailUrl}
                target='_blank'
                rel='noreferrer'
                className='flex rounded-full bg-green border-black border-2 px-10 items-center h-10 mr-2'
              >
                <span className='font-medium'>Email Me</span>
              </a>

              <a href={linkedInUrl} className='inline-block'>
                <Image
                  src='/icon-linkedin.svg'
                  alt='LinkedIn'
                  width={40}
                  height={40}
                />
              </a>

              <a href={githubUrl}>
                <Image
                  src='/icon-github.svg'
                  alt='Github'
                  width={38}
                  height={40}
                />
              </a>

              <a href={stackoverflowUrl}>
                <Image
                  src='/icon-stack-overflow.svg'
                  alt='Stack Overflow'
                  width={40}
                  height={40}
                />
              </a>

            </div>
          </div>

          <div className='hidden lg:block w-3/6 mt-auto'>
            <Image
              src='/profile-photo.png'
              alt='Profile photo'
              width={445}
              height={534}
            />
          </div>

        </div>
      </main>
    </div>
  )
}

export default Home
