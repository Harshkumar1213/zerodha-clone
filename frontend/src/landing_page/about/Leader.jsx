export default function Leader() {
    return ( 
        <div className="container mt-5">
            <div className="row text-center mhead">
                <h2>People</h2>
            </div>
            <div className="row">
                <div className="col-6 img">
                    <img src="img/nithinKamath.jpg" alt="img" />
                    <h3 className="text-center">Nithin Kamath</h3>
                    <p className="text-center">Founder, CEO</p>
                </div>
                <div className="col-6">
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                    <p>Playing basketball is his zen.</p>
                    <p>Connect on <a href="">Homepage</a> / <a href="">TradingQnA</a> / <a href="">Twitter</a></p>
                </div>
            </div>
        </div>
     );
};