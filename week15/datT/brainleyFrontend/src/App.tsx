import React from 'react'
import { Button } from './components/Button'
import { StartIcon } from './Icons/StartIcon'
import { LastIcon } from './Icons/LastIcon'


const App = () => {
  return (
    <div className='text-center space-y-10 bg-blue-200 min-h-screen'>
      <h1>have to render three button Components</h1>

      <Button variants='primary' title='primary button' size='sm' startIcon={<StartIcon size='sm'/>} endIcon={<LastIcon size='sm'/>}  /> <br />
      <Button variants='primary' title='primary button' size='md' startIcon={<StartIcon size='md'/>} endIcon={<LastIcon size='md'/>} /> <br />
      <Button variants='primary' title='primary button' size='lg' startIcon={<StartIcon size='lg'/>} endIcon={<LastIcon size='lg'/>}/> <br />
      {/* <Button variants='secondary' title='secondary button' /> */}

    </div>
  )
}

export default App