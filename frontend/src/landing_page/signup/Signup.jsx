import SignupA from "./SignupA";
import OpenAccount from "../OpenAccount";
import Signup2 from '../Pages/Signup2.jsx';

import './Signup.css';

function Signup() {
    return ( 
        <>
        <div className="container mt-5">
            <div className="row text-center main">
              <h2>Open a free demat and trading account online</h2>
              <p>Start investing brokerage free and join a community of 1.6+ crore investors and traders</p>
            </div> 
            <div className="row mt-5">
              <div className="col-6">
                <img style={{width:'100%'}} src="img/signup.png" alt="img" />
              </div>
              <div className="col-6 mt-5 right-col">
                <Signup2/>
                <p style={{color:' #666666'}}>By proceeding, you agree to the Zerodha
                  &nbsp;<a style={{color:' #666666'}} href="">terms</a> &&nbsp; 
                  <a style={{color:' #666666'}} href="">privacy policy</a></p>
              </div>
            </div>
          <SignupA/>      
        </div>
          <OpenAccount/>
        </>
     );
}

export default Signup;