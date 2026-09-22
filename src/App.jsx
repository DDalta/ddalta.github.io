import { useState } from 'react'

import Header from "./components/sections/header.jsx"
import Hero from "./components/sections/hero.jsx"
import About from "./components/sections/about.jsx"
import Skills from "./components/sections/skills.jsx"
import Projects from "./components/sections/projects.jsx"
import Contact from "./components/sections/contact.jsx"
import FloatingCatButton from './components/layout/floatingcatbutton.jsx'

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <FloatingCatButton />
    </div>
  )
}

export default App
