import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/neet/online-coaching-class-11' element={<Class11Prog/>}/>
            <Route path='/neet/online-coaching-class-12' element={<Class12Prog/>} />
            <Route path='/' element={<Landing/>}/>
            <Route path='*' element={<ErrorPage />} /> 
            {/* when we use * inside the path we create a routes where if the user went he will see the error page */}
          </Route>
        </Routes>
      </BrowserRouter>  
    </div>
  )
}


const Layout = () => {
  return (
  <div>
        <Link to='/'>allen</Link> || 
        <Link to='/neet/online-coaching-class-11'>class 11</Link> ||
        <Link to='/neet/online-coaching-class-12' >class 12</Link> ||  
        <Outlet/> 
        footer || outler  
  </div>
  )
}
const ErrorPage = () => {
  return <div>
    <h1>Errror page not found </h1>
  </div>
}

const Class11Prog = () => {
  return (
    <>
      <h1>class 11</h1>
    </>
  )
}
const Class12Prog = () => {
  // lets use useNavigate hook to 
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      navigate('/')
      // we redirect the user to home page after 5 sec in the class12 page 
    }, 5000);
  }, [])
  
  return (
    <>
      <h1>class 12</h1>
    </>
  )
}


const Landing = ( ) => {
  return (
    <>
      <h1>Landing</h1>
    </>
  )
}

export default App