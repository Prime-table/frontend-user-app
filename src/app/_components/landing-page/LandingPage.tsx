import React from 'react'
import Hero from './Hero'
import HowItWorks from './HowItWorks'
import Menu from './Menu'
import Testimonials from './Testimonials'
import AboutUs from './AboutUs'
import Partners from './Partners'

export default function LandingPage() {
  return (
    <div>
      <Hero />
      <Partners />
      <HowItWorks />
      <Menu />
      <Testimonials />
      <AboutUs />
    </div>
  )
}
