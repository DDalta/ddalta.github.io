import { useState } from 'react'

import Header from "./components/sections/header.jsx"
import Hero from "./components/sections/hero.jsx"
import About from "./components/sections/about.jsx"
import Skills from "./components/sections/skills.jsx"
import Projects from "./components/sections/projects.jsx"
import Contact from "./components/sections/contact.jsx"

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
