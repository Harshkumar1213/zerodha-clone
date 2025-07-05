import "./HomePage.css";

export default function Market() {
    return ( 
        <div className="container mt-5">
            <div className="row">
                <div className="col-6">
                    <img src="img/Screenshot (13).png" alt="" />
                </div>
                <div className="col-6">
                    <h3>Free and open market education</h3>
                    <p className="lh-lg color">Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a className="text-decoration-none" href="">Varsity <i class="fa-solid fa-arrow-right"></i></a>
                    <p className="lh-lg color">TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a className="text-decoration-none" href="">TradingQ&A <i class="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
     );
}

