export default function Hero() {
    return ( 
        <div className="container mt-5">
            <div className="row text-center ">
                <h1 className="fs-1 fw-semibold">Charges</h1>
                <p className="fs-5">List of all charges and taxes</p>
            </div>
            <div className="row text-center mt-5">
                <div className="col">
                    <img src="img/Screenshot (10).png" alt="" />
                    <h3>Free equity delivery</h3>
                    <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className="col mt-5">
                    <img src="img/Screenshot (12).png" alt="" />
                    <h3>Intraday and F&O trades</h3>
                    <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className="col">
                    <img src="img/Screenshot (10).png" alt="" />
                    <h3>Free direct MF</h3>
                    <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
     );
};