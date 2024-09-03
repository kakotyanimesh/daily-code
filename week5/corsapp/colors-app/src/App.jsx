import React, {useState} from 'react'
import axios from 'axios'

const App = () => {

  const [colors, setColors] = useState()

  const getColors = async () => {
    // console.log("ani");
    const colosList = await axios.get('http://localhost:3069/colors')
    const colorsData = colosList.data
    
    
    console.log(colorsData);
    
    setColors(colorsData)
  }


  return (
    <>
    <div>Cors with color app </div>
    <button onClick={getColors}>Click to get colors</button>
    <p>{colors && JSON.stringify(colors)}</p>
    </>
  )
}

export default App