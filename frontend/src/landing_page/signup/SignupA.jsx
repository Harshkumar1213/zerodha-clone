import './Signup.css';

export default function SignupA() {
    return ( 
        <>
        <div className="row main2 text-center">
              <h2>Investment options with Zerodha demat account</h2>
            <div className="row option">
                <div className="col-6 options">
                    <div>
                        <img style={{width:'100%'}} src="img/stocks-acop.svg" alt="" />
                    </div>
                    <div className='text-start'>
                        <h2>Stocks</h2>
                        <p>Invest in all exchange-listed <br /> securities</p>
                    </div>
                </div>
                <div className="col-6 options">
                    <div>
                        <img style={{width:'100%'}} src="img/mf-acop.svg" alt="" />
                    </div>
                    <div className='text-start'>
                        <h2>Mutual funds</h2>
                        <p>Invest in commission-free direct <br /> mutual funds</p>
                    </div>
                </div>
            </div>
            <div className="row option">
                <div className="col-6 options">
                    <div>
                        <img style={{width:'100%'}} src="img/ipo-acop.svg" alt="" />
                    </div>
                    <div className='text-start'>
                        <h2>IPO</h2>
                        <p>Apply to the latest IPOs instantly <br /> via UPI</p>
                    </div>
                </div>
                <div className="col-6 options">
                    <div>
                        <img style={{width:'100%'}} src="img/fo-acop.svg" alt="" />
                    </div>
                    <div className='text-start'>
                        <h2>Futures & options</h2>
                        <p>Hedge and mitigate market risk <br /> through simplified F&O trading</p>
                    </div>
                </div>
            </div>
            </div> 
        </>
     );
};