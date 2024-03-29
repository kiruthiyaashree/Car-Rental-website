import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Landing from './components/Landing'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import FilterList from './components/FilterList'
import Profile from './components/Profile'
import Renting from './components/Renting'
import Admin from './AdminComponents/Admin'
import Home from './AdminComponents/Home'
import UserDetails from './AdminComponents/Userdetails'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/signin' element={<SignIn/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/filters' element={<FilterList/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/renting' element={<Renting/>}/>
          <Route path='/adminsignin' element={<Admin/>}/>
          <Route path='/adminhome' element={<Home/>}/>
          <Route path='/adminhome/userdetails' element={<UserDetails/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App