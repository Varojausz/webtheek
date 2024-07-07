import Logo from '@/components/Logo';
import React, { ReactNode } from 'react'
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from 'react-toastify';

interface AuthLayoutProps {
    children: React.ReactNode
}

export default function AuthLayout({children}: AuthLayoutProps): ReactNode {
  return (
    <>

    <div className='bg-accent min-h-screen'>

        <div className='py-10 lg:py-20 mx-auto px-8 sm:px-0 sm:w-[450px] '>
            <Logo />

            <div className='mt-10'>
                {children}
            </div>
        </div>

    </div>


{/*       <section className=" max-w-screen-2xl mx-auto mt-10 p-5">
        {children}
      </section> */}


    <ToastContainer
      pauseOnHover={false}
      pauseOnFocusLoss={false}
    />
    </>
  );
}
