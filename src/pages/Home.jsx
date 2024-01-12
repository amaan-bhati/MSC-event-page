import React from 'react'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'

{/*<div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
    popup
  </div>*/}

const Home = () => {
  return (
   
    <section className='w-full h-screen relative'>
    <Canvas 
    className='w-full h-screen relative'
    camera={{near: 0.1, far: 1000 }}
    >
    <Suspense fallback={<Loader/>}>
    </Suspense>{/*suspense loader will help the 3d model to load and while the 3d model is getting loaded it will show the lader*/}


    </Canvas>



    </section>
  )
}

export default Home