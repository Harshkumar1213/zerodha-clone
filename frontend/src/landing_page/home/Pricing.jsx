import './HomePage.css';

export default function Pricing() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-5">
          <h3>Unbeatable pricing</h3>
          <p className="lh-lg color">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a className="text-decoration-none" href="">
            See pricing <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <div className="col-7 price">
          <div className="prices">
            <img className='pimg ppimg'
              src="img/Screenshot (10).png"
              alt="img"
            />
            <p className='color'>
              Free account <br /> opening
            </p>
          </div>
          <div className="prices">
            <img className='pimg ppimg'
              src="img/Screenshot (10).png"
              alt="img"
            />
            <p className='color'>
              Free equity delivery <br /> and direct mutual funds
            </p>
          </div>
          <div className="prices">
            <img className='pimg'
              src="img/Screenshot (12).png"
              alt="img"/>
            <p className='color'>
              Intraday and <br /> F&O
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
