import { useState } from 'react'
import './App.css'
import MiApi from './components/MiApi'
import Buscador from './components/Buscador'

function App() {
  const [wizardData, setWizardData] = useState([])
  const [wizardFilter, setWizardFilter] = useState([])
  const [searcher, setSearcher] = useState("")

  return (
    <>
      <Buscador 
      wizardData={wizardData}
      searcher={searcher}
      setSearcher={setSearcher}
      setWizardFilter={setWizardFilter}
      />
    <div className='main'>
      <MiApi 
      wizardData={wizardData}
      setWizardData={setWizardData}
      wizardFilter={wizardFilter}
      setWizardFilter={setWizardFilter}
      />
    </div>
    </>
  )
}

export default App
