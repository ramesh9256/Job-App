import { useState } from 'react'
import './App.css'
import './index.css'
import ResponsiveAppBar from './components/ResponsiveAppBar'
import SearchBar from './components/SearchBar'
import CardSlider from './components/CardSlider'
import Footer from './components/Footer'
import JobCard from './components/JobCard'
import Company from './components/Company'
import JobCard1 from './components/JobCard1'
import Company1 from './components/Company1'
import ManyJob from './components/ManyJob'
import Offer from './components/Offer'
import TextBelow from './components/TextBelow'



function App() {
  const [count, setCount] = useState(0)

  return (

    <div className='w-full h-screen bg-gray-100'>
      <ResponsiveAppBar />
      <SearchBar />
      <CardSlider />
      <JobCard />
      <Company />
      <JobCard1 />
      <Company1 />
      <ManyJob />
      <Offer />
      <TextBelow />
      <Footer />
    </div>

  )
}

export default App
