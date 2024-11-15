import Header from '@/components/Header'
import { getProviders, signIn } from 'next-auth/react'

export default function signin({ providers }) {
  return (
    <>
      <Header />

      <div className='flex justify-center space-x-7 mt-20'>
        <img
          src='/photo-1666408738188-212c470d08b0.jfif'
          alt='insta-img'
          className='hidden md:inline-flex md:w-48 rotate-6 object-cover'
        />

        <div className='flex flex-col items-center'>
          <img
            src='https://socodigital.com/wp-content/uploads/2021/03/Instagram.png'
            alt='sm-log'
            className='w-32'
          />

          <p className='italic text-sm my-10'>leanr aim</p>

          {Object.values(providers).map((p) => (
            <button
              onClick={signIn(p.id, { callbackUrl: '/' })}
              className='p-4 bg-red-400 hover:bg-red-600 rounded-md text-white'
            >
              Sign in {p.name}
            </button>
          ))}
        </div>
      </div>

      {/* <div className='mt-32 justify-center flex space-x-7'>
        <img
          src='/photo-1666408738188-212c470d08b0.jfif'
          alt='insta-image'
          className='rounded-lg rotate-6 hidden md:inline-flex md:w-48'
        />

        <div className=''>
          <img
            src='https://socodigital.com/wp-content/uploads/2021/03/Instagram.png'
            alt='sm-logo'
            className='w-32 object-cover'
          />

          <h3 className='italic text-sm my-4'>
            This app is created for learning purposes
          </h3>

          {Object.values(providers).map((p) => (
            <div className='flex flex-col items-center' key={p.id}>
              <button
                onClick={() => signIn(p.id, { callbackUrl: '/' })}
                className=' border rounded-xl p-3 my-5 text-white bg-red-400 hover:bg-red-600'
              >
                Sign In {p.name}
              </button>
            </div>
          ))}
        </div>
      </div> */}
    </>
  )
}

export async function getServerSideProps(context) {
  const providers = await getProviders()

  return {
    props: { providers },
  }
}
