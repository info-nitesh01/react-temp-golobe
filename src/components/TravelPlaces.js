import React from 'react'
import CityPlace from './Place-Citycard';
import place1 from '../assets/images/place-city.png'
import place2 from '../assets/images/place-city2.png'
import place3 from '../assets/images/place-city3.png'
import place4 from '../assets/images/place-city4.png'

function TravelPlaces() {
  return (
    <>
      <div className='d-flex align-items-start pt-3'>
        <div className='w-75'>
          <h3 className='bruno-font mb-4'>Fall into travel</h3>
          <p className='mb-4'>Going somewhere to celebrate this season? Whether you’re going home or somewhere to roam, we’ve got the travel tools to get you to your destination.</p>
        </div>
        <div className='w-25 d-flex justify-content-end align-items-center'>
          <button type="button" className="d-flex me-2 align-items-center btn btn-mint-onhover float-end">See All</button>
        </div>
      </div>
      <div className='row mt-2'>
        <CityPlace place={place1} city={'Melbourne'} slogan={'An amazing journey'} price={'700'} />
        <CityPlace place={place2} city={'Paris'} slogan={'A Paris Adventure'} price={'600'} />
        <CityPlace place={place3} city={'London'} slogan={'London eye adventure'} price={'350'} />
        <CityPlace place={place4} city={'Columbia'} slogan={'Amazing streets'} price={'700'} />
      </div>
    </>
  );
}

export default TravelPlaces;
