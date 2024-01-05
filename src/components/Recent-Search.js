import React from 'react'
import RecentCards from './Recent-Cards';
import place1 from '../assets/images/intanbul.png'
import place2 from '../assets/images/Sydney.png'
import place3 from '../assets/images/Azerbaijan.png'
import place4 from '../assets/images/Maldives.png'

function RecentSearch() {
  return (
    <>
      <div className='mb-5'>
        <h3 className='bruno-font pt-3 mb-4'>Your Recent Searches</h3>
        <div className='row'>
          <RecentCards place={place1} placeName={'Istanbul, Turkey'} totalplace={'325'} />
          <RecentCards place={place2} placeName={'Sydney, Australia'} totalplace={'325'} />
          <RecentCards place={place3} placeName={'Baku, Azerbaijan'} totalplace={'325'} />
          <RecentCards place={place4} placeName={'Malé, Maldives'} totalplace={'325'} />
        </div>
      </div>
    </>
  );
}

export default RecentSearch;
