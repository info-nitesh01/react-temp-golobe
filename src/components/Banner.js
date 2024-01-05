import React from 'react'
import MyVideo from "../assets/video/banner-video.mp4";


function Banner() {
  return (
    <>

      <div className='banner position-relative'>
        <div className='banner-img d-flex justify-content-end position-relative'>
          <video height={520} className='banner-video' autoPlay loop muted>
            <source src={MyVideo} type="video/mp4" allowFullScreen />
          </video>
        </div>
        <div className='bannertext position-absolute w-30 text-start'>
          <p class="banner-animate fs-1 start-0"> Make your<br /> travel whishlist,<br /> we’ll do the<br /> rest</p>
          <h5 className='text-white mont-font'>Special offers to suit your plan</h5>
        </div>
      </div>
    </>
  );
}

export default Banner;
