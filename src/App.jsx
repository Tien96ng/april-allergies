import Allergies from './components/Allergies';
import './App.css'

import allergies from "../data/april_allergies.json"

function App() {

  return (
    <>
      <Allergies data={allergies}/>
    </>
  )
}

export default App
