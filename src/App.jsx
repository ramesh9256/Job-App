import { useState } from 'react'
import './App.css'
import './index.css'
import Body from './components/Body'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ResponsiveAppBar from './components/ResponsiveAppBar'
import JobsPage from './components/JobsPage'
import Footer from './components/Footer'
import  Login  from './components/Login'
import View from './components/View'
import ViewJob from './components/ViewJob'
import PostLearn from './components/PostLearn'
import TalentLearn from './components/TalentLearn'
import Top from './components/Top'





function App() {
  const [count, setCount] = useState(0)

  return (

    <div className='w-full h-screen bg-gray-100'>
      <Router>
        <ResponsiveAppBar />
        <Routes>
          <Route path='/' element={<Body />} ></Route>
          <Route path='/apply' element={<Login />}></Route>
          <Route path='/view' element={<View />}></Route>
          <Route path='/viewjob' element = {<ViewJob/>}></Route>
          <Route path='/learnmore' element = {<PostLearn/>}></Route>
          <Route path='/learntalent' element = {<TalentLearn/>}></Route>          
        </Routes>
      </Router>
      <Footer />
      
    </div>

  )
}

export default App
