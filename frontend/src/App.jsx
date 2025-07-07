import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Login from './Pages/Login.jsx'
import Request from './Pages/Request.jsx'
import ViewRequests from './Pages/ViewRequests.jsx'
import Home from './Pages/Home.jsx'
import { UserProvider } from './Pages/UserProvider.jsx'

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/request' element={<Request />} />
          <Route path='/viewrequest' element={<ViewRequests />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App
