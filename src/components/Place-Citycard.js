import React from 'react'

function CityPlace(props) {
    return (
        <>
            <div className='col-lg-3 col-sm-6 fade-up mb-4 text-white position-relative d-flex justify-content-end flex-column align-items-center'>
                <img src={props.place} className='mw-100 city-card' alt="" />
                <div className='position-absolute mb-4'>
                    <div className='d-flex justify-content-between w-250px'>
                        <div>
                            <h5 className='mb-0 fw-bold'>{props.city}</h5>
                            <p className='fw-lighter med-font'>{props.slogan}</p>
                        </div>
                        <div className='d-flex align-items-center ms-4 fw-bold'>
                            <h5>$ {props.price}</h5>
                        </div>
                    </div>
                    <div>
                        <button type="button" className="d-flex justify-content-center w-100 align-items-center btn btn-mint">Book a Hotel</button>
                    </div>
                </div>

            </div>
        </>
    );
}

export default CityPlace;
