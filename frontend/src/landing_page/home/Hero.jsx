import Button from '@mui/material/Button';
import React from 'react';

export default function Hero () {
    return ( 
        <div className="container text-center center p-5">
            <div className="row text-center">
                <img className="mb-5" src="img/homeHero.png" alt="imgs" />
                <div className="row">
                    <h1 className="mt-5">Invest in everything</h1>
                    <p className="fs-5">Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                </div>
                <div className="col">
                    <Button variant="contained">
                        <a className='bootbtn' style={{textDecoration:"none",padding:"0.8rem"}} 
                        href='/signup'>Sign up for free</a>
                    </Button>
                </div>
            </div>
        </div>
     );
};
