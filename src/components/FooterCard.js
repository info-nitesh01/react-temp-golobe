import React from 'react'
import ftimage from '../assets/images/ft-card-img.png'

function FooterCard() {
  return (
    <>
      <div className='text-start position-relative p-4 ftcard-mb-minus mt-5 mw-1170px m-auto shadow-lg rounded-4 footer-card'>
        <h2 class="bruno-font pt-3 mb-4">Subscribe<br />Newsletter</h2>
        <h5 className='bruno-font text-muted'>The Travel</h5>
        <p className='text-muted'>Get inspired! Receive travel discounts, tips and behind the scenes stories.</p>
        <div className='d-flex'>
          <input type="email" className="form-control form-control-lg w-40 fs-6 py-2" placeholder='Your email address' />
          <button type="submit" className="btn btn-dark btn-lg ms-2">Submit</button>
        </div>
        <img src={ftimage} className='position-absolute bottom-0 end-0 pe-4 h-100 fc-img' alt="" />
      </div>
    </>
  );
}

export default FooterCard;
