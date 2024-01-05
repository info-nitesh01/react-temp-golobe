import React from 'react'

function RecentCards(props) {
  return (
    <>
      <div className='d-flex align-items-center recentplace py-1 col-sm-6 col-xl-3'>
        <img src={props.place} alt="" className='me-3 ms-2' height={85} />
        <div>
          <p className='mb-0 fw-bold'>{props.placeName}</p>
          <p className='small-font text-muted mb-0' >{props.totalplace} places</p>
        </div>
      </div>
    </>
  );
}

export default RecentCards;
