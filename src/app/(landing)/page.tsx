import React from 'react'
import CallToAction from './_components/call-to-action'
import Features from './_components/features'
import HowItWork from './_components/how-it-work'
import Language from './_components/language'
import Pricing from './_components/pricing'
import Contact from './_components/contact'
import Footer from './_components/footer'
import VideoAnalayse from './_components/video-analyse'

export default function Home()  {
  return (
    <>
      <main className="flex-1">
        <CallToAction/>
        <VideoAnalayse/>
        <Features/>
        <HowItWork/>
        {/* <Language/> */}
        <Pricing/>
        <Contact/>
      </main>
      <Footer/>
    </>
  )
}