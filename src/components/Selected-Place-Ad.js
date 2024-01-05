import React from 'react'
import SelectedPlaceDetails from './Selected-Place-details';

function SelectedPlace() {
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
      <div className=''>
        <SelectedPlaceDetails />
      </div>
    </>
  );
}

export default SelectedPlace;