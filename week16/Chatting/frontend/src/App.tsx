import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import ChatRoom from './Pages/ChatRoom'

const App = () => {
  return (
    <div className='bg-gradient-to-b from-[#FFB2B2] to-[#A6B4FF] min-h-screen' >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/chat' element={<ChatRoom/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App