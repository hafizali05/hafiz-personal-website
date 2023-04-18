import { FunctionComponent } from 'react'
import './App.css'
import About from './components/about'
import Header from './components/header'

const App:FunctionComponent = () => {

  return (
    <div className="App">
      <Header />
      <section className='main-section' id="main">
      <About />
      </section>
    </div>
  )
}

export default App
