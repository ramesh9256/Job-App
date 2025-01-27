import React from 'react'

import SearchBar from './SearchBar'
import CardSlider from './CardSlider'
import JobCard from './JobCard'
import Company from './Company'
import JobCard1 from './JobCard1'
import Company1 from './Company1'
import ManyJob from './ManyJob'
import Offer from './Offer'
import TextBelow from './TextBelow'


const Body = () => {
  return (
    <div>
      
      <SearchBar />
      <CardSlider />
      <JobCard />
      <Company />
      <JobCard1 />
      <Company1 />
      <ManyJob />
      <Offer />
      <TextBelow />  
    </div>
  )
}

export default Body
