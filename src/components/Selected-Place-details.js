import React from 'react'

function SelectedPlaceDetails() {
  return (
    <>
      <div className='row'>
        <div className='col-lg-6 col-sm-12 mt-3'>
          <div className='bg-mint rounded-4 d-flex flex-column p-4 h-100'>
            <div className='d-flex justify-content-between'>
              <h2 className='bruno-font pt-3 mb-4'>Backpacking<br />Sri Lanka</h2>
              <div className='bg-white rounded-3 h-fit d-flex flex-column align-items-center p-2'>
                <p className='mb-1 bruno-font'>From</p>
                <h5 className='mb-0 fw-bold'>$ 700</h5>
              </div>
            </div>
            <p className='med-font'>Traveling is a unique experience as it's the best way to unplug from the pushes and pulls of daily life. It helps us to forget about our problems, frustrations, and fears at home. During our journey, we experience life in different ways. We explore new places, cultures, cuisines, traditions, and ways of living.</p>
            <button type="button" className="d-flex justify-content-center w-100 mt-auto align-items-center btn btnWhite">Book Flight</button>
          </div>
        </div>
        <div className='col-lg-6 col-sm-12 mt-3'>
          <div class="gallery">
            <img src="https://fortedgeretreat.com/wp-content/uploads/2016/10/Adams-peak-1.jpg" alt="a sky of an old city" />
            <img src="https://www.jftours.com/uploads/772/conversions/preview.jpg" alt="a small boat" />
            <img src="https://www.planetware.com/wpimages/2020/01/sri-lanka-best-places-to-visit-kandy.jpg" alt="a forest" />
            <img src="https://media.istockphoto.com/id/471107172/photo/seema-malaka-temple-in-colombo-sri-lanka.jpg?b=1&s=170667a&w=0&k=20&c=sT3YMBqimh5MuiA2KudPLH7inAGXCLm5w9hUCk5mMOU=" alt="a hot air balloon" />
          </div>
        </div>
      </div>
    </>
  );
}

export default SelectedPlaceDetails;