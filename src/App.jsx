import { useState } from 'react'

import Header from "./components/sections/header.jsx"
import Hero from "./components/sections/hero.jsx"
import About from "./components/sections/about.jsx"
import Skills from "./components/sections/skills.jsx"
import Projects from "./components/sections/projects.jsx"

function App() {
  return (
    <div className='font-lexend text-default-text-color'>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
    </div>
  )
}

export default App
